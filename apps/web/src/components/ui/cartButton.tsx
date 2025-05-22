'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function CartButton() {
  const count = useSelector((state: RootState) => state.cart.items.length);

  return (
    <Link href="/checkout" className="fixed top-6 right-6 z-50">
      <div className="relative bg-white text-black p-2 rounded-full shadow-md hover:scale-105 transition">
        <ShoppingCart className="w-5 h-5" />
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">
            {count}
          </span>
        )}
      </div>
    </Link>
  );
}
