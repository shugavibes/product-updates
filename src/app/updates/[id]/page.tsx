import { notFound } from 'next/navigation';
import ProductUpdate from '@/components/product-update';
import { updatesData } from '@/components/product-updates';

export default function UpdatePage({
  params,
}: {
  params: { id: string }
}) {
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