import { notFound } from 'next/navigation';
import ProductUpdate from '../../../components/product-update';
import { updatesData } from '@/components/product-updates';
import { Metadata } from 'next';

// Define the params type
type Params = { id: string };

// Define the page props type
type PageProps = {
  params: Params;
};

// Define the page component
export default async function Page({ params }: PageProps) {
  const update = updatesData.updates.find(u => u.id === params.id);
  
  if (!update) {
    notFound();
  }

  return <ProductUpdate update={update} />;
}

// Generate metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const update = updatesData.updates.find(u => u.id === params.id);
  
  return {
    title: update ? `${update.title} | Atlas Updates` : 'Atlas Updates',
  };
}

// Generate static params
export async function generateStaticParams(): Promise<Params[]> {
  return updatesData.updates.map((update) => ({
    id: update.id,
  }));
} 