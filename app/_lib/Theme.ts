import cookies from 'js-cookie';
export async function setTheme(theme: string) {
  const cookieStore = cookies;
  cookieStore.set('theme', theme, { expires: 365 });
}
