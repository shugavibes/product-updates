import { notFound } from 'next/navigation';
import ProductUpdate from '../../../components/product-update';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

type Props = {
  params: Promise<{ id: string }>;
};

function getUpdatesData() {
  const updatesFilePath = path.join(process.cwd(), 'src/data/updates.json');
  const fileContents = fs.readFileSync(updatesFilePath, 'utf8');
  return JSON.parse(fileContents);
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const updatesData = getUpdatesData();
  const update = updatesData.updates.find((u: any) => u.id === resolvedParams.id);
  
  if (!update) {
    notFound();
  }

  return <ProductUpdate update={update} />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const updatesData = getUpdatesData();
  const update = updatesData.updates.find((u: any) => u.id === resolvedParams.id);
  
  return {
    title: update ? `${update.title} | Atlas Updates` : 'Atlas Updates',
  };
}

export async function generateStaticParams() {
  const updatesData = getUpdatesData();
  return updatesData.updates.map((update: any) => ({
    id: update.id,
  }));
} 