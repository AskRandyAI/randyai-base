'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WalletConnect } from './WalletConnect';
import { Home, BookOpen, Award, MessageCircle } from 'lucide-react';

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/courses', label: 'Courses', icon: BookOpen },
    { href: '/certificates', label: 'Certificates', icon: Award },
    { href: '/chat', label: 'Chat', icon: MessageCircle },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl">🦝</div>
            <span className="text-xl font-bold text-gray-900">RandyAI</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <WalletConnect />
          </div>
        </div>
      </div>

      <div className="md:hidden border-t border-gray-200">
        <div className="flex justify-around items-center py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  isActive ? 'text-blue-600' : 'text-gray-600'
                }`}
              >
                <Icon size={20} />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
        <div className="px-4 pb-3">
          <WalletConnect />
        </div>
      </div>
    </nav>
  );
}

