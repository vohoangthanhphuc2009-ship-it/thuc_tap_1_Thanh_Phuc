import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-gray-800 text-white">
      <div className="text-xl font-bold">My Portfolio</div>
      <nav className="flex gap-4">
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <Link href="/about" className="hover:text-blue-400">About Us</Link>
        <Link href="/cv" className="hover:text-blue-400">CV</Link>
        <Link href="/products" className="hover:text-blue-400">My Product</Link>
        <Link href="/contact" className="hover:text-blue-400">Contact</Link>
      </nav>
    </header>
  );
}