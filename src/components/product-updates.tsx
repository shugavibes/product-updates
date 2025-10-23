import React from 'react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export interface Update {
  id: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  type: 'major' | 'feature' | 'enhancement';
  videoUrl?: string;
  imageUrl?: string;
  additionalText?: string;
  buttonUrl?: string;
  buttonText?: string;
}

interface UpdatesData {
  updates: Update[];
  metadata: {
    lastUpdate: string;
    totalUpdates: number;
  };
}

export const updatesData: UpdatesData = {
  "updates": [
    {
        "id": "0001",
        "date": "2025-08-24",
        "title": "Meet the Atlas Card, our new product",
        "description": "Introducing the Atlas Card, the employee card designed to simplify everything beyond payroll 🤝 \n\n One card. 120 countries. 60 currencies. Way less chaos. 😌 Your team gets the flexibility they need, you get the clarity you need.",
        "tags": ["Card", "Product Update"],
        "type": "feature",
        "imageUrl": "/introducing.png",
        "buttonUrl": "https://www.heyatlas.com/card",
        "buttonText": "Learn More"
    },
    {
      "id": "005",
      "date": "2018-12-09",
      "title": "Hey, there are too many previous releases to list here right now 😉",
      "description": "We have many more releases prior to these, but we only recently started sharing them on this site, and we believe it's not worth going too far back.\n\nOur focus is on delivering value consistently, with quality and speed, so everything new we're working on will get the spotlight it deserves here.",
      "tags": ["Atlas", "Product Updates"],
      "type": "feature",
      "videoUrl": "/liquidlogo.mov",
      "additionalText": "-\n\nPS: That's not the date of the first release, it's a random date. But if you want to learn more about Atlas, [reach out to us through our website](https://www.heyatlas.com)."
    }
  ],
  "metadata": {
    "lastUpdate": "2025-07-01",
    "totalUpdates": 12
  }
};

const getTagColor = (type: Update['type']): string => {
  const colors = {
    major: 'bg-purple-900 text-purple-100',
    feature: 'bg-green-900 text-green-100',
    enhancement: 'bg-blue-900 text-blue-100',
    default: 'bg-gray-800 text-gray-100'
  };
  return colors[type] || colors.default;
};

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

interface TimelineDateProps {
  date: string;
}

const TimelineDate: React.FC<TimelineDateProps> = ({ date }) => (
  <div className="text-sm text-gray-400 relative pl-6 pr-4 pt-8">
    <div className="absolute left-1 top-0 bottom-0 w-[1px] bg-gray-800"></div>
    <div className="absolute left-0 top-[2.5rem] w-2 h-2 rounded-full" style={{ backgroundColor: '#6670CC' }}></div>
    {formatDate(date)}
  </div>
);

interface UpdateContentProps {
  update: Update;
}

const UpdateContent: React.FC<UpdateContentProps> = ({ update }) => {
  const { id, title, description, tags, type, videoUrl, imageUrl, additionalText, buttonUrl, buttonText } = update;
  
  return (
    <div className="py-8">
      <Link 
        href={`/updates/${id}`} 
        className="group inline-block"
      >
        <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400">
          {title}
        </h2>
      </Link>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <Badge 
            key={tag} 
            variant="secondary" 
            className={`text-xs ${getTagColor(type)}`}
          >
            {tag}
          </Badge>
        ))}
      </div>
      <div className="text-gray-300 whitespace-pre-line mb-4">
        <ReactMarkdown
          components={{
            a: ({ ...props }) => <a {...props} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer" />,
            strong: ({ ...props }) => <strong {...props} className="font-bold" />
          }}
        >
          {description}
        </ReactMarkdown>
      </div>
      {imageUrl && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            width={id === "001" || id === "001b" || id === "002" ? 600 : id === "000d" ? 680 : 800}
            height={id === "001" || id === "001b" || id === "002" ? 300 : id === "000d" ? 340 : 400}
            className={`${id === "001" || id === "001b" || id === "002" ? "w-100%" : "w-100%"} rounded-xl`}
          />
        </div>
      )}
      {videoUrl && (
        <div className={`relative ${id === "006" ? "pt-[50%]" : "pt-[50.50%]"}`}>
          {videoUrl.endsWith('.mov') ? (
            <video
              src={videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full"
            />
          ) : (
            <iframe 
              src={videoUrl}
              frameBorder="0"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          )}
        </div>
      )}
      {additionalText && (
        <div className="text-gray-300 whitespace-pre-line mb-4">
          <ReactMarkdown
            components={{
              a: ({ ...props }) => <a {...props} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer" />
            }}
          >
            {additionalText}
          </ReactMarkdown>
        </div>
      )}
      {buttonUrl && (
        <a
          href={buttonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
        >
          {buttonText || 'Learn More'}
        </a>
      )}
    </div>
  );
};

const ProductUpdates = () => {
  const { updates } = updatesData;

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <header className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="https://www.heyatlas.com">
              <Image
                src="/logo.svg"
                alt="Atlas Logo"
                width={128}
                height={32}
                className="h-8"
              />
            </Link>
          </div>
          
          <nav className="flex items-center space-x-4">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white border-b-2 border-blue-400 transition-all duration-300"
            >
              Released
            </Link>
            <Link 
              href="/upcoming" 
              className="text-gray-300 hover:text-white border-b-2 border-transparent transition-all duration-300"
            >
              Coming Soon
            </Link>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto py-12 px-4">
        <header className="mb-16 text-left">
          <h1 className="font-reckless text-6xl text-white mb-4">Latest Product Updates</h1>
        </header>

        <div className="grid grid-cols-[auto,1fr] md:grid-cols-[200px,1fr]">
          {updates.map((update) => (
            <React.Fragment key={update.id}>
              <TimelineDate date={update.date} />
              <UpdateContent update={update} />
            </React.Fragment>
          ))}
        </div>
      </div>

      <footer className="border-t border-zinc-800 py-8 mt-16">
        <div className="container flex flex-col items-center">
          <Link href="https://www.heyatlas.com">
            <Image
              src="/logo.svg"
              alt="Atlas Logo"
              width={80}
              height={20}
              className="h-5 mb-4"
            />
          </Link>
          <p className="text-sm text-zinc-400">© 2025 Atlas. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductUpdates;