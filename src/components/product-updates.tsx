import React from 'react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

interface Update {
  id: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  type: 'major' | 'feature' | 'enhancement';
  videoUrl?: string;
}

interface UpdatesData {
  updates: Update[];
  metadata: {
    lastUpdate: string;
    totalUpdates: number;
  };
}

const updatesData: UpdatesData = {
  "updates": [
    {
      "id": "001",
      "date": "2025-02-17",
      "title": "Compra de puntos",
      "description": "Now you can buy additional Atlas points to take advantage of more benefits. You can add points in two ways:\n-Recurring: Receive a specific amount of extra points every month.\n-One-Time: Add points just once.\nWith this functionality, you have more possibilities to acquire higher value benefits or to complete what you need to use all the points for the month.\nFind out how to do it in this article",
      "tags": ["Teams App", "New Feature"],
      "type": "major",
    },
    {
      "id": "002",
      "date": "2025-02-16",
      "title": "Performance Improvements",
      "description": "Significant optimizations that improve loading speed by 50%. We've implemented lazy loading for all images and improved the caching system.",
      "tags": ["Performance", "Technical"],
      "type": "enhancement",
      "videoUrl": "https://www.loom.com/embed/979a1c34c0e74531ae73fbd4df592ddd?sid=a3926e34-dcc9-4992-874e-4c23f3831bce"
    },
    {
      "id": "003",
      "date": "2025-02-15",
      "title": "New Export Functionality",
      "description": "You can now export your data in multiple formats including PDF, CSV, and Excel. We've also added customization options for reports.",
      "tags": ["Feature", "Export"],
      "type": "feature"
    }
  ],
  "metadata": {
    "lastUpdate": "2025-02-17",
    "totalUpdates": 3
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
  const { title, description, tags, type, videoUrl } = update;
  
  return (
    <div className="py-8">
      <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>
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
      <p className="text-gray-300 whitespace-pre-line mb-4">{description}</p>
      {videoUrl && (
        <div className="relative pt-[50.50%]">
          <iframe 
            src="https://www.loom.com/embed/979a1c34c0e74531ae73fbd4df592ddd?sid=a3926e34-dcc9-4992-874e-4c23f3831bce"
            frameBorder="0"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
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
            {/* If you're using Next.js, use the Image component */}
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Atlas Logo"
                width={128}
                height={32}
                className="h-8"
              />
            </Link>
          </div>
          
          {/* Add additional header items here if needed */}
          <nav className="hidden md:flex items-center space-x-4">
            {/* Add navigation items here if needed */}
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto py-12 px-4">
        <header className="mb-16 text-center">
          <h1 className="font-reckless text-5xl text-white mb-4">Product Updates</h1>
        </header>

        <div className="grid grid-cols-[200px,1fr]">
          {updates.map((update, index) => (
            <React.Fragment key={update.id}>
              <TimelineDate date={update.date} />
              <UpdateContent update={update} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductUpdates;