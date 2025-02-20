import { notFound } from 'next/navigation';
import ProductUpdate from '../../../components/product-update';
import { updatesData } from '@/components/product-updates';
import { Metadata } from 'next';

export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const update = updatesData.updates.find(u => u.id === params.id);
  
  if (!update) {
    notFound();
  }

  return <ProductUpdate update={update} />;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const update = updatesData.updates.find(u => u.id === params.id);
  
  return {
    title: update ? `${update.title} | Atlas Updates` : 'Atlas Updates',
  };
}

export async function generateStaticParams() {
  return updatesData.updates.map((update) => ({
    id: update.id,
  }));
} 