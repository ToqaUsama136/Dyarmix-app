import Landing from '@/_components/home/Landing';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <main>
      <Landing />
      <h1 className="bg-cyan-600 text-3xl font-bold">{t('title')}</h1>
    </main>
  );
}
