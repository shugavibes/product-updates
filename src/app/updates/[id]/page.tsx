import { notFound } from 'next/navigation';
import ProductUpdate from '@/components/product-update';
import { updatesData } from '@/components/product-updates';

interface Props {
  params: {
    id: string;
  };
}

export default async function UpdatePage({ params }: Props) {
  const update = updatesData.updates.find(u => u.id === params.id);
  
  if (!update) {
    notFound();
  }

  return <ProductUpdate update={update} />;
}

// Generate static params for all updates
export async function generateStaticParams() {
  return updatesData.updates.map((update) => ({
    id: update.id,
  }));
} 