import ProductUpdates from '../components/product-updates';
import fs from 'fs';
import path from 'path';

export default function Home() {
  const updatesFilePath = path.join(process.cwd(), 'src/data/updates.json');
  const fileContents = fs.readFileSync(updatesFilePath, 'utf8');
  const updatesData = JSON.parse(fileContents);
  
  return <ProductUpdates updatesData={updatesData} />;
}