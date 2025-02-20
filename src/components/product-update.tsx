import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import ReactMarkdown from 'react-markdown';
import { Update } from '@/components/product-updates';

export default function ProductUpdate({ update }: { update: Update }) {
  const { title, description, tags, type, videoUrl, imageUrl, additionalText } = update;

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
        </div>
      </header>

      <main className="max-w-3xl mx-auto py-12 px-4">
        <Link href="/" className="text-blue-400 hover:underline mb-8 inline-block">
          ← Back to updates
        </Link>
        
        <article className="mt-8">
          <h1 className="text-3xl font-semibold text-white mb-6">{title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="secondary" 
                className={`text-xs px-2 py-1 ${getTagColor(type)}`}
              >
                {tag}
              </Badge>
            ))}
          </div>

          <p className="text-gray-300 whitespace-pre-line mb-8">{description}</p>

          {imageUrl && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <Image
                src={imageUrl}
                alt={title}
                width={800}
                height={400}
                className="w-full rounded-xl"
              />
            </div>
          )}

          {additionalText && (
            <div className="text-gray-300 whitespace-pre-line mb-8">
              <ReactMarkdown
                components={{
                  a: ({ node, ...props }) => <a {...props} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer" />
                }}
              >
                {additionalText}
              </ReactMarkdown>
            </div>
          )}

          {videoUrl && (
            <div className="relative pt-[56.25%] mb-8">
              <iframe 
                src={videoUrl}
                frameBorder="0"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-xl"
              />
            </div>
          )}
        </article>
      </main>

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

const getTagColor = (type: Update['type']) => {
  switch (type) {
    case 'major':
      return 'text-blue-400 bg-blue-400/10';
    case 'feature':
      return 'text-green-400 bg-green-400/10';
    case 'enhancement':
      return 'text-purple-400 bg-purple-400/10';
    default:
      return 'text-gray-400 bg-gray-400/10';
  }
}; 