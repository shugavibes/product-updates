import { redirect } from 'next/navigation';
import { verifySession } from '@/lib/auth';
import Link from 'next/link';
import Image from 'next/image';
import AdminForm from '@/components/admin-form';

export default async function AdminPage() {
  const isAuthenticated = await verifySession();

  if (!isAuthenticated) {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <header className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Atlas Logo"
              width={128}
              height={32}
              className="h-8"
            />
          </Link>
          <nav className="flex items-center space-x-4">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white transition-all duration-300"
            >
              View Site
            </Link>
          </nav>
        </div>
      </header>

      <div className="max-w-4xl mx-auto py-12 px-4">
        <AdminForm />
      </div>

      <footer className="border-t border-zinc-800 py-8 mt-16">
        <div className="container flex flex-col items-center">
          <Link href="https://www.heyatlas.com">
            <Image
              src="/logo.svg"
              alt="Atlas Logo"
              width={80}
              height={20}
              className="h-5 mb-4"
            />
          </Link>
          <p className="text-sm text-zinc-400">© 2025 Atlas. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
