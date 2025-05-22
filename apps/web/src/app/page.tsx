import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center space-y-8">
      <h1 className="text-5xl font-bold tracking-wide">TRENDIES FEATURES</h1>
      <nav className="flex space-x-6 text-lg">
        <Link href="/products" className="hover:underline">Checkout Flow</Link>
      </nav>
    </main>
  );
}