'use server';
import { cookies } from 'next/headers';

export async function setLocale(locale: string) {
  const cookiesStore = await cookies();

  cookiesStore.set('locale', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  });
}
export async function handleLocale(locale: string) {
  await setLocale(locale);
}
