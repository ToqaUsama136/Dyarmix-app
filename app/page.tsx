import Landing from '@/_components/home/Landing';
import { cookies } from 'next/headers';
import ToggleButton from './_components/ui/ToggleButton';
export default async function Home() {
  const cookieStore = await cookies();

  const theme = cookieStore.get('theme')?.value || 'light';
  const darkMode = theme === 'dark';

  return (
    <main className={darkMode ? 'dark' : ''}>
      <Landing />
      <div className="bg-amber-50 dark:bg-gray-900 dark:text-white">Hello</div>
      <ToggleButton currentTheme={theme} />
    </main>
  );
}
