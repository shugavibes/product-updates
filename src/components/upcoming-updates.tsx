import React from 'react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Update } from './product-updates';

const upcomingData = {
  "updates": [
    {
      "id": "upcoming-001",
      "date": "March 2025",
      "title": "Scheduled Gifts",
      "description": "HR Admins can now schedule gift deliveries for specific days. This feature enhances the experience in these key areas:\n\n-Admins can set up monthly gifts in advance if they already know celebration or birthday dates, saving time on management and ensuring no important date is missed.\n-Admins have more control over their budget by managing it at the beginning of the month instead of requesting fund approvals or payments each time they need to send gifts.\n\n",
      "tags": ["Admin", "Gifts", "New Feature"],
      "type": "enhancement",
      "imageUrl": "/gifts.png",
      "additionalText": "\nStart giving gifts to your team [with Atlas.](http://admin.heyatlas.com/es/account).",
    },
    {
      "id": "upcoming-002",
      "date": "March 2025",
      "title": "Display coupon value in local currency",
      "description": "You'll see the value of each coupon in your country's currency, so you know how much it's worth for each product.\n\nFor example, if you request a coupon for a food delivery, you'll see the benefit's value in points and also in Argentine Pesos (if you're in Argentina). The amount in ARS is what will be applied as a discount in the delivery app.",
      "tags": ["Teams App", "Improvement"],
      "type": "major",
      "imageUrl": "/cupon.png",
      "additionalText": "\nThis change will gradually apply to all new available coupons, so it may take a few weeks before you see it across all benefits.",
    }
  ],
  "metadata": {
    "totalUpcoming": 1
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
          {updates.map((update, index) => (
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
                      width={update.id === "upcoming-001" ? 500 : 700}
                      height={update.id === "upcoming-001" ? 300 : 500}
                      className={`${update.id === "upcoming-001" ? "w-100%" : "w-100%"} rounded-xl`}
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

export default UpcomingUpdates; 