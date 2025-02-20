import { notFound } from 'next/navigation';
import ProductUpdate from '@/components/product-update';
import { updatesData } from '@/components/product-updates';
import { Metadata } from 'next';

type Props = {
  params: { id: string };
  searchParams: Record<string, string | string[] | undefined>;
};

export default async function UpdatePage(props: Props) {
  const update = updatesData.updates.find(u => u.id === props.params.id);
  
  if (!update) {
    notFound();
  }

  return <ProductUpdate update={update} />;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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