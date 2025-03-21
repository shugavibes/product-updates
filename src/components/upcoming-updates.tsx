import React from 'react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

const upcomingData = {
  "updates": [
    {
      "id": "upcoming-000",
      "date": "March 2025",
      "title": "Usage Metrics for Admins",
      "description": "We are adding a metrics dashboard to the Admin platform that provides detailed insights into your team's points and benefits usage. On the homepage, you'll find some of the most important data, while the full set of metrics will be available in the Analytics section.\n\nIn this section, admins will be able to see:\n\n-User and points consumption growth month over month\n-Total credit consumption\n-Top and least spending users\n-Most purchased categories and benefits\n-Additional data to complement the overall insights.\n\nThis new dashboard will help admins better track their teams, enhance the usage of the benefits that matter most to their company, and make more informed decisions on how to continue growing their compensation package with Atlas.",
      "tags": ["Admin", "Analytics", "New Feature"],
      "type": "major",
      "imageUrl": "/metrics-dashboard.png",
      "additionalText": "-\nGet early access to the metrics dashboard by [contacting our team.](https://www.heyatlas.com/contact)."
    },
    {
      "id": "upcoming-001",
      "date": "April 2025",
      "title": "In app service payment",
      "description": "In the new update of this feature, service payments are now processed end-to-end within the mobile app. This improves the experience of paying for services with Atlas Points in the following ways:\n\n-The contractor has greater clarity on the invoice amount and available points.\n-They can pay multiple invoices at once.\n-They can pay both fixed and open-amount invoices.\n-They can view overdue invoices.",
      "tags": ["Teams App", "New Feature"],
      "type": "major",
      "imageUrl": "/service-payment.png",
      "additionalText": "\nFor now, this feature is only available for internet service payments in Argentina, but soon all services will be available in Argentina, Chile, Peru, Colombia, and Mexico."
    },
    {
      "id": "upcoming-002",
      "date": "April 2025",
      "title": "Assign paid by company benefits",
      "description": "HR Admins can now assign specific benefits that are paid directly by the company. This new functionality includes:\n\n-Set up benefits that don't consume employee points\n-Define which employees receive company-paid benefits\n-Assigning benefits more autonomously without contacting CX\n-Greater control and customization over which benefit to give\n\nThis feature gives companies more flexibility in how they structure their benefits program, allowing for a mix of point-based and company-paid benefits.",
      "tags": ["Admin", "Benefits", "New Feature"],
      "type": "major",
      "imageUrl": "/pbc-benefits.png",
      "additionalText": "\nThis feature will first be released for assigning health plans and will later support more benefits."
    }
  ],
  "metadata": {
    "totalUpcoming": 3
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