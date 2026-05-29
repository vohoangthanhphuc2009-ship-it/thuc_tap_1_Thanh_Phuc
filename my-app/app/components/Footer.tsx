import { Facebook, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="p-6 bg-gray-900 text-white flex justify-center gap-6">
      <Link href="https://github.com/your-link" target="_blank">
        <Github className="hover:text-gray-400" />
      </Link>
      <Link href="https://facebook.com/your-link" target="_blank">
        <Facebook className="hover:text-blue-500" />
      </Link>
    </footer>
  );
}