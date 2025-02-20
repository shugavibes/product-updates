import { notFound } from 'next/navigation';
import ProductUpdate from '../../../components/product-update';
import { updatesData } from '@/components/product-updates';
import { Metadata } from 'next';

interface PageProps {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page(props: PageProps) {
  const update = updatesData.updates.find(u => u.id === props.params.id);
  
  if (!update) {
    notFound();
  }

  return <ProductUpdate update={update} />;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const update = updatesData.updates.find(u => u.id === props.params.id);
  
  return {
    title: update ? `${update.title} | Atlas Updates` : 'Atlas Updates',
  };
}

export async function generateStaticParams() {
  return updatesData.updates.map((update) => ({
    id: update.id,
  }));
} 