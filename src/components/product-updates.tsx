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
      "id": "000e",
      "date": "2025-07-01",
      "title": "Flora Fertilidad partnership",
      "description": "We're excited to announce our partnership with Flora Fertilidad, expanding our health benefits to include comprehensive fertility program assistance in Mexico and Argentina. This new benefit provides access to professional fertility support and guidance for employees and their partners.\n\nThis benefit can be accessed in two ways:\n\t•\tHR Admins can enable it directly for specific team members as a company-paid benefit\n\t•\tTeam members can purchase access using their Atlas points\n\nThis partnership reinforces our commitment to supporting employees through all stages of their personal and professional journey, offering meaningful health benefits that address real-life needs.",
      "tags": ["Health", "Benefits"],
      "type": "feature",
      "imageUrl": "/flora-fertilidad.png",
    },
    {
      "id": "000d",
      "date": "2025-06-27",
      "title": "Assign Health Plans paid by company",
      "description": "HR Admins can now assign specific benefits that are paid directly by the company. This new functionality includes:\n\t•\tSet up benefits that don't consume employee points\n\t•\tDefine which employees receive company-paid benefits\n\t•\tAssigning benefits more autonomously without contacting CX\n\t•\tGreater control and customization over which benefit to give\n\nThis feature gives companies more flexibility in how they structure their benefits program, allowing for a mix of point-based and company-paid benefits.",
      "tags": ["Admin", "Benefits"],
      "type": "major",
      "imageUrl": "/pbc-benefits2.png",
      "additionalText": "\nThis feature will first be released for assigning OSDE health plans and will later support more benefits."
    },
    {
      "id": "000c",
      "date": "2025-05-07",
      "title": "Team view improvements",
      "description": "We've rolled out improvements to the team view in the admin platform:\n\t•\tYou can now choose which information to display when viewing your team, and adjust it on the fly.\n\t•\tYou can also filter the view by country, seniority, status, and more.\n\t•\tPlus, there's a detailed user view with more information and the ability to edit user details",
      "tags": ["Admin", "Improvement"],
      "type": "enhancement",
      "videoUrl": "/admin.mov",
    },
    {
      "id": "000b",
      "date": "2025-04-27",
      "title": "Web to app migration",
      "description": "In conversations with our users, we identified that the best use of benefits happens in contextual situations like requesting a grocery gift card while heading to the store, using an Uber discount right after a trip, and so on.\n\n That's why we've focused on optimizing that experience through our mobile app. We've shut down our web platform and transitioned to a 100% mobile product, aiming to deliver better features, increased security, and greater convenience when using benefits.",
      "tags": ["Teams App", "Improvement"],
      "type": "enhancement",
      "imageUrl": "/bannerapp.png",
      "additionalText": "-\nDonwload the Atlas teams app on [Android](https://play.google.com/store/apps/details?id=com.atlas.teams&hl=es_AR) or [iOS](https://apps.apple.com/ar/app/atlas-teams/id6618110826?l=en-GB)."
    },
    {
      "id": "000a",
      "date": "2025-03-20",
      "title": "Scheduled Gifts",
      "description": "HR Admins can now schedule gift deliveries for specific days. This feature enhances the experience in these key areas:\n- Admins can set up monthly gifts in advance if they already know celebration or birthday dates, saving time on management and ensuring no important date is missed.\n- Admins have more control over their budget by managing it at the beginning of the month instead of requesting fund approvals or payments each time they need to send gifts.\n\n",
      "tags": ["Admin", "Gifts", "New Feature"],
      "type": "enhancement",
      "videoUrl": "https://www.loom.com/embed/0d8a40308d7649cdae3b3edea8ea4e8d?sid=c3957ca3-8e9a-48f7-bf79-bd9908ed7d6d",
      "additionalText": "-\nStart giving gifts to your team [with Atlas](https://www.heyatlas.com/gifts)."
    },
    {
      "id": "000",
      "date": "2025-03-20",
      "title": "Gift reminder",
      "description": "We've added a new feature that helps Admins better track the gifts they send to their teams.\n\nNow, from the list of sent gifts, they can:\n\t•\tSee who has opened the gift\n\t•\tSend a reminder email to encourage recipients to use their gift\n\nFor now, this only applies to selected benefit gifts and does not apply to balance gifts.\n\nThis provides Admins with more insights and greater control over their teams' experience with the gifts they receive.",
      "tags": ["Admin", "New Feature", 'Gifts'],
      "type": "enhancement",
      "videoUrl": "https://www.loom.com/embed/752c8797124941699b8c140d727b3176?sid=e3631a5d-0787-4e6a-8650-0c25bd299436",
      "additionalText": "-\nStart giving gifts to your team [with Atlas](https://www.heyatlas.com/gifts)."
    },
    {
      "id": "001",
      "date": "2025-03-17",
      "title": "Display coupon value in local currency",
      "description": "You'll see the value of each coupon in your country's currency, so you know how much it's worth for each product.\n\nFor example, if you request a coupon for a food delivery, you'll see the benefit's value in points and also in Argentine Pesos (if you're in Argentina). The amount in ARS is what will be applied as a discount in the delivery app.",
      "tags": ["Teams App", "Improvement"],
      "type": "major",
      "imageUrl": "/cuponprice.png",
      "additionalText": "\nThis change will gradually apply to all new available coupons, so it may take a few weeks before you see it across all benefits."
    },
    {
      "id": "001b",
      "date": "2025-03-10",
      "title": "Improved descriptions for each benefit",
      "description": "We've enhanced the way benefits are presented in the app by adding more detailed descriptions for each one. Now you'll find:\n\n- Clear explanations of what each benefit includes\n- Step-by-step instructions on how to use them\n- Important details about restrictions or conditions\n\nThis improvement will help users better understand what they are purchasing, how they will receive it, and how to use the benefit after the purchase.",
      "tags": ["Teams App", "UX Improvement"],
      "type": "major",
      "imageUrl": "/benefits-description.png"
    },
    {
      "id": "002",
      "date": "2025-02-24",
      "title": "Extra Points",
      "description": "Now you can buy additional Atlas points to take advantage of more benefits. You can add points in two ways:\n-Recurring: Receive a specific amount of extra points every month.\n-One-Time: Add points just once.\n\nWith this functionality, you have more possibilities to acquire higher value benefits or to complete what you need to use all the points for the month.",
      "tags": ["Teams App", "New Feature"],
      "type": "major",
      "imageUrl": "/extrapoints.png",
      "additionalText": "\nFind out how to do it in [this article](https://ayuda.heyatlas.com/es/articles/10370653-como-adquirir-puntos-adicionales).",
    },
    {
      "id": "003",
      "date": "2025-01-16",
      "title": "New Admin's onboarding & authentication experience",
      "description": "We've made a complete update to the authentication experience for admins. The most significant change is the migration from an external WorkOS process to having a full integration, which allows us to have total control over every aspect of the registration and access process.\n\nFrom the user's perspective, this enhances the experience by reducing errors and providing a complete flow within the Atlas platform without having to go through other services. Additionally, we've added Google social login and a clearer password recovery and change process.\n\nAlso, during the account creation flow, users can now schedule a call with Atlas to receive sales support, or continue with self-onboarding and start using Atlas on their own in just a few minutes.",
      "tags": ["Admin", "Onboarding", "Authentication"],
      "type": "enhancement",
      "videoUrl": "https://www.loom.com/embed/979a1c34c0e74531ae73fbd4df592ddd?sid=a3926e34-dcc9-4992-874e-4c23f3831bce"
    },
    {
      "id": "004",
      "date": "2024-12-15",
      "title": "Service Payment - TAPI integration",
      "description": "In remote work dynamics, employees' homes serve as their workspaces. Allowing them to pay for their services using company benefits creates value for employees while providing HR administrators with a powerful retention and recruitment tool.\n\nThat's why we've integrated with Tapi, the largest service payment provider in LATAM. This enables our users to pay for their home services using a benefit provided by their company.\n\nThe first version of this integration covers internet services in Argentina, but we will gradually expand to more categories and countries until we complete the integration in Colombia, Mexico, Chile, and Peru.",
      "tags": ["Feature", "Benefits"],
      "type": "feature",
      "videoUrl": "https://www.youtube.com/embed/BSOR3t5kjII",
      "additionalText": "-\nFind out how to do it in [this article](https://ayuda.heyatlas.com/es/articles/9917579-como-pagar-tus-servicios-con-puntos-atlas-faqs)."
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