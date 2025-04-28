'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative inline-flex h-8 w-16 items-center rounded-full bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-gray-700"
      aria-label="Toggle theme"
    >
      <span
        className={`absolute z-10 flex h-6 w-6 transform items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${
          theme === 'dark' ? 'translate-x-8' : 'translate-x-1'
        }`}
      >
        <Image
          src={theme === 'dark' ? '/icons/darkTheme.svg' : '/icons/lightTheme.svg'}
          alt={theme === 'dark' ? 'Dark Theme' : 'Light Theme'}
          width={16}
          height={16}
          className="h-4 w-4 object-contain"
        />
      </span>
    </button>
  );
}
