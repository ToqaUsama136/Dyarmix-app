'use client';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type Props = {
  currentTheme: string;
};

export default function ToggleButton({ currentTheme }: Props) {
  const [darkMode, setDarkMode] = useState(currentTheme === 'dark');
  const router = useRouter();

  const toggleMode = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    Cookies.set('theme', newTheme, { expires: 365 });
    setDarkMode(!darkMode);
    router.refresh();
  };

  return (
    <button
      onClick={toggleMode}
      className="absolute right-0 m-4 h-16 w-16 rounded-full bg-neutral-900 text-white dark:bg-neutral-300"
    >
      {darkMode ? 'light' : 'dark'}
    </button>
  );
}
