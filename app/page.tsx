import Landing from '@/_components/home/Landing';
import { cookies } from 'next/headers';
export default async function Home() {
  const cookieStore = await cookies();

  const theme = cookieStore.get('theme')?.value || 'light';
  const darkMode = theme === 'dark';

  const toggleMode = () => {
    cookieStore.set('theme', darkMode ? 'light' : 'dark', { expires: 365 });
  };

  return (
    <main className={darkMode ? 'dark' : ''}>
      <Landing />
      <div className="bg-amber-50 dark:bg-gray-900 dark:text-white">Hello</div>
      <button
        onClick={toggleMode}
        className="absolute right-0 m-4 h-16 w-16 rounded-full bg-neutral-900 text-white dark:bg-neutral-300"
      >
        {darkMode ? 'light' : 'dark'}
      </button>
    </main>
  );
}
