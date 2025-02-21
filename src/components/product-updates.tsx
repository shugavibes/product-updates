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
      "id": "001",
      "date": "2025-02-25",
      "title": "Scheduled Gifts",
      "description": "HR Admins can now schedule gift deliveries for specific days. This feature enhances the experience in these key areas:\n\n-Admins can set up monthly gifts in advance if they already know celebration or birthday dates, saving time on management and ensuring no important date is missed.\n-Admins have more control over their budget by managing it at the beginning of the month instead of requesting fund approvals or payments each time they need to send gifts.\n\n",
      "tags": ["Admin", "Gifts", "New Feature"],
      "type": "enhancement",
      "imageUrl": "/gifts.png",
      "additionalText": "\nStart giving gifts to your team [with Atlas.](http://admin.heyatlas.com/es/account).",
    },
    {
      "id": "002",
      "date": "2025-02-24",
      "title": "Display coupon value in local currency",
      "description": "You'll see the value of each coupon in your country's currency, so you know how much it's worth for each product.\n\nFor example, if you request a coupon for a food delivery, you'll see the benefit's value in points and also in Argentine Pesos (if you're in Argentina). The amount in ARS is what will be applied as a discount in the delivery app.",
      "tags": ["Teams App", "Improvement"],
      "type": "major",
      "imageUrl": "/cupon.png",
      "additionalText": "\nThis change will gradually apply to all new available coupons, so it may take a few weeks before you see it across all benefits.",
    },
    {
      "id": "003",
      "date": "2025-02-24",
      "title": "Extra Points",
      "description": "Now you can buy additional Atlas points to take advantage of more benefits. You can add points in two ways:\n-Recurring: Receive a specific amount of extra points every month.\n-One-Time: Add points just once.\n\nWith this functionality, you have more possibilities to acquire higher value benefits or to complete what you need to use all the points for the month.",
      "tags": ["Teams App", "New Feature"],
      "type": "major",
      "imageUrl": "/extrapoints.png",
      "additionalText": "\nFind out how to do it in [this article](https://ayuda.heyatlas.com/es/articles/10370653-como-adquirir-puntos-adicionales).",
    },
    {
      "id": "004",
      "date": "2025-01-16",
      "title": "New Admin's onboarding & authentication experience",
      "description": "We've made a complete update to the authentication experience for admins. The most significant change is the migration from an external WorkOS process to having a full integration, which allows us to have total control over every aspect of the registration and access process.\n\nFrom the user's perspective, this enhances the experience by reducing errors and providing a complete flow within the Atlas platform without having to go through other services. Additionally, we've added Google social login and a clearer password recovery and change process.\n\nAlso, during the account creation flow, users can now schedule a call with Atlas to receive sales support, or continue with self-onboarding and start using Atlas on their own in just a few minutes.",
      "tags": ["Admin", "Onboarding", "Authentication"],
      "type": "enhancement",
      "videoUrl": "https://www.loom.com/embed/979a1c34c0e74531ae73fbd4df592ddd?sid=a3926e34-dcc9-4992-874e-4c23f3831bce"
    },
    {
      "id": "005",
      "date": "2024-12-15",
      "title": "Service Payment - TAPI integration",
      "description": "In remote work dynamics, employees' homes serve as their workspaces. Allowing them to pay for their services using company benefits creates value for employees while providing HR administrators with a powerful retention and recruitment tool.\n\nThat's why we've integrated with Tapi, the largest service payment provider in LATAM. This enables our users to pay for their home services using a benefit provided by their company.\n\nThe first version of this integration covers internet services in Argentina, but we will gradually expand to more categories and countries until we complete the integration in Colombia, Mexico, Chile, and Peru.",
      "tags": ["Feature", "Benefits"],
      "type": "feature",
      "videoUrl": "https://www.youtube.com/embed/BSOR3t5kjII",
      "additionalText": "-\nFind out how to do it in [this article](https://ayuda.heyatlas.com/es/articles/9917579-como-pagar-tus-servicios-con-puntos-atlas-faqs)."
    },
    {
      "id": "006",
      "date": "2018-12-09",
      "title": "Hey, there are too many previous releases to list here right now 😉",
      "description": "We have many more releases prior to these, but we only recently started sharing them on this site, and we believe it's not worth going too far back.\n\nOur focus is on delivering value consistently, with quality and speed, so everything new we're working on will get the spotlight it deserves here.",
      "tags": ["Atlas", "Product Updates"],
      "type": "feature",
      "videoUrl": "/liquidlogo.mov",
      "additionalText": "-\nIf you want to learn more about Atlas, [reach out to us through our website](https://www.heyatlas.com)."
    }
  ],
  "metadata": {
    "lastUpdate": "2025-02-21",
    "totalUpdates": 6
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
  const { id, title, description, tags, type, videoUrl, imageUrl, additionalText } = update;
  
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
            width={id === "001" ? 400 : 600}
            height={id === "001" ? 200 : 300}
            className={`${id === "001" ? "w-40%" : "w-50%"} rounded-xl`}
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
          
          {/* Add additional header items here if needed */}
          <nav className="hidden md:flex items-center space-x-4">
            {/* Add navigation items here if needed */}
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto py-12 px-4">
        <header className="mb-16 text-left">
          <h1 className="font-reckless text-6xl text-white mb-4">Product Updates</h1>
        </header>

        <div className="grid grid-cols-[200px,1fr]">
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