import cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
export async function setTheme(theme: string) {
  const cookieStore = cookies;
  cookieStore.set('theme', theme, { expires: 365 });
}

export function handleToggleMode(
  darkMode: boolean,
  setDarkMode: (value: boolean) => void,
  router: ReturnType<typeof useRouter>,
) {
  setDarkMode(!darkMode);
  setTheme(darkMode ? 'light' : 'dark');
  router.refresh();
}
