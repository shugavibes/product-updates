import React from 'react';
import { Badge } from '@/components/ui/badge';

interface Update {
  id: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  type: 'major' | 'feature' | 'enhancement';
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
      "title": "New User Interface",
      "description": "We've completely redesigned the interface to improve user experience and make navigation easier. Changes include:\n- New navigation system\n- Accessibility improvements\n- Customizable dark mode",
      "tags": ["UI", "UX", "Design"],
      "type": "major"
    },
    {
      "id": "002",
      "date": "2025-02-16",
      "title": "Performance Improvements",
      "description": "Significant optimizations that improve loading speed by 50%. We've implemented lazy loading for all images and improved the caching system.",
      "tags": ["Performance", "Technical"],
      "type": "enhancement"
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
    major: 'bg-red-900 text-red-100',
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
  <div className="text-sm text-gray-400 relative pl-6 pr-4">
    <div className="absolute left-0 top-[1.6rem] w-2 h-2 rounded-full" style={{ backgroundColor: '#6670CC' }}></div>
    <div className="absolute left-1 top-0 bottom-0 w-[1px] bg-gray-800"></div>
    {formatDate(date)}
  </div>
);

interface UpdateContentProps {
  update: Update;
}

const UpdateContent: React.FC<UpdateContentProps> = ({ update }) => {
  const { title, description, tags, type } = update;
  
  return (
    <div className="py-8 pl-8">
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
      <p className="text-gray-300 whitespace-pre-line">{description}</p>
    </div>
  );
};

const ProductUpdates: React.FC = () => {
  const { updates } = updatesData;

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Product Updates</h1>
        </header>

        <div className="grid grid-cols-[200px,1fr]">
          {updates.map((update, index) => (
            <React.Fragment key={update.id}>
              <TimelineDate date={update.date} />
              <UpdateContent update={update} />
              {index !== updates.length - 1 && (
                <>
                  <div className="bg-gray-800 h-[1px] col-span-2 mx-4"></div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductUpdates;