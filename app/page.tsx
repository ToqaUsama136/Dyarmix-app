import Landing from '@/_components/home/Landing';
import ToggleButton from './_components/ui/ToggleButton';
export default async function Home() {
  return (
    <main>
      <Landing />
      <div className="bg-amber-50 dark:bg-gray-900 dark:text-white">Hello</div>
      <ToggleButton currentTheme="dark" />
    </main>
  );
}
