'use client';

import Image from 'next/image';
import Link from 'next/link';

const images = [
  '/images/post1.jpg',
  '/images/post2.jpg',
  '/images/post3.jpg',
  '/images/post4.jpg',
  '/images/post5.jpg',
  '/images/post6.jpg',
  '/images/post7.jpg',
  '/images/post8.jpg',
  '/images/post9.jpg'
];

const Explore = () => {
  return (
    <div className="flex flex-col items-center py-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Explore</h1>
      <div className="grid grid-cols-3 gap-2 w-full max-w-4xl">
        {images.map((src, index) => (
          <Link href="/post/[id]" as={`/post/${index + 1}`} key={index}>
            <div className="relative w-full aspect-square cursor-pointer hover:opacity-75 transition">
              <Image src={src} alt={`Post ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Explore;
