import React from 'react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

interface UpcomingUpdate {
  id: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  type: string;
  imageUrl?: string;
  additionalText?: string;
}

interface UpcomingData {
  updates: UpcomingUpdate[];
  metadata: {
    totalUpcoming: number;
  };
}

const upcomingData: UpcomingData = {
  "updates": [
    {
      "id": "upcoming-001",
      "date": "November 2025",
      "title": "Admin Redesign",
      "description": "We're giving the admin dashboard a complete makeover. A more intuitive interface, better navigation, and powerful new controls to manage your team's cards and spending all in one place.",
      "tags": ["Admin", "UI Update"],
      "type": "enhancement"
    },
    {
      "id": "upcoming-002",
      "date": "December 2025",
      "title": "Exchange Rates Visibility",
      "description": "Users will now be able to see real-time exchange rates directly in the app. Stay informed about currency conversions and make better financial decisions for your team.",
      "tags": ["Feature", "Exchange Rates"],
      "type": "feature"
    },
    {
      "id": "upcoming-003",
      "date": "January 2026",
      "title": "Card Limits and Restrictions Dashboard",
      "description": "Introducing a new dashboard where users can view all card limits, spending restrictions, and available budgets. Full transparency for better financial planning.",
      "tags": ["Feature", "Cards"],
      "type": "feature"
    },
    {
      "id": "upcoming-004",
      "date": "February 2026",
      "title": "Add Extra Funds to Balances",
      "description": "Users will be able to add extra funds to their card balances directly through the app. More flexibility and control over your spending power.",
      "tags": ["Feature", "Funding"],
      "type": "feature"
    },
    {
      "id": "upcoming-005",
      "date": "March 2026",
      "title": "Wellness Marketplace",
      "description": "Introducing the Wellness Marketplace in the Atlas app. Discover and purchase wellness services, gym memberships, mental health resources, and more - all in one place.",
      "tags": ["Wellness", "Marketplace"],
      "type": "major"
    },
    {
      "id": "upcoming-006",
      "date": "April 2026",
      "title": "Push Notifications",
      "description": "Stay updated with real-time push notifications. Get instant alerts for transactions, card activity, budget updates, and important announcements right on your device.",
      "tags": ["Feature", "Notifications"],
      "type": "feature"
    }
  ],
  "metadata": {
    "totalUpcoming": 6
  }
};

const UpcomingUpdates = () => {
  const { updates } = upcomingData;

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
              className="text-gray-300 hover:text-white border-b-2 border-transparent transition-all duration-300"
            >
              Released
            </Link>
            <Link 
              href="/upcoming" 
              className="text-gray-300 hover:text-white border-b-2 border-blue-400 transition-all duration-300"
            >
              Coming Soon
            </Link>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto py-12 px-4">
        <header className="mb-16 text-left">
          <h1 className="font-reckless text-6xl text-white mb-4">Coming Soon</h1>
        </header>

        <div className="space-y-8">
          {updates.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No upcoming updates at the moment. Check back soon! ✨</p>
            </div>
          ) : (
            updates.map((update, index) => (
            <React.Fragment key={update.id}>
              <div className="py-8">
                <div className="text-sm text-gray-400 mb-4">
                  {update.date}
                </div>
                <h2 className="text-xl font-semibold text-white mb-3">{update.title}</h2>
                <div className="flex flex-wrap gap-2 mb-4">
                  {update.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="text-xs px-2 py-1 text-blue-400 bg-blue-400/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-300 whitespace-pre-line mb-4">{update.description}</p>
                {update.imageUrl && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={update.imageUrl}
                      alt={update.title}
                      width={update.id === "upcoming-000" ? 900 : 700}
                      height={update.id === "upcoming-000" ? 700 : 500}
                      className={`${update.id === "upcoming-000" ? "w-100%" : "w-100%"} rounded-xl`}
                    />
                  </div>
                )}
                {update.additionalText && (
                  <div className="text-gray-300 whitespace-pre-line mb-4">
                    <ReactMarkdown
                      components={{
                        a: ({ ...props }) => <a {...props} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer" />
                      }}
                    >
                      {update.additionalText}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
              {index < updates.length - 1 && (
                <div className="border-b border-zinc-800" />
              )}
            </React.Fragment>
          )))}
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

export default UpcomingUpdates; 