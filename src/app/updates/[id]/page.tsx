import { notFound } from 'next/navigation';
import ProductUpdate from '../../../components/product-update';
import { updatesData } from '@/components/product-updates';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const update = updatesData.updates.find(u => u.id === resolvedParams.id);
  
  if (!update) {
    notFound();
  }

  return <ProductUpdate update={update} />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const update = updatesData.updates.find(u => u.id === resolvedParams.id);
  
  return {
    title: update ? `${update.title} | Atlas Updates` : 'Atlas Updates',
  };
}

export async function generateStaticParams() {
  return updatesData.updates.map((update) => ({
    id: update.id,
  }));
} 