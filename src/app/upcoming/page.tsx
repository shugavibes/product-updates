import UpcomingUpdates from '@/components/upcoming-updates';
import fs from 'fs';
import path from 'path';

export default function UpcomingPage() {
  const upcomingFilePath = path.join(process.cwd(), 'src/data/upcoming.json');
  const fileContents = fs.readFileSync(upcomingFilePath, 'utf8');
  const upcomingData = JSON.parse(fileContents);
  
  return <UpcomingUpdates upcomingData={upcomingData} />;
} 