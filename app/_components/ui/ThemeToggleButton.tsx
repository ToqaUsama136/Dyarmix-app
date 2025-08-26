'use client';
import { handleToggleMode } from '@/_lib/Theme';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


type Props = {
  currentTheme: string;
};

export default function ThemeToggleButton({ currentTheme }: Props) {
  const [darkMode, setDarkMode] = useState(currentTheme === 'dark');
  const router = useRouter();
  return (
    <button
      onClick={() => handleToggleMode(darkMode, setDarkMode, router)}
      className="absolute right-0 m-4 h-16 w-16 rounded-full bg-neutral-900 text-white dark:bg-neutral-300"
    >
      {darkMode ? 'light' : 'dark'}
    </button>
  );
}
