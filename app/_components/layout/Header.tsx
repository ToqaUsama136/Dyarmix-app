'use client';
import NavLinks from '@/_components/ui/NavLinks';
import { handleLocale } from '@/_lib/setLocale';
import Image from 'next/image';

export default function Header() {
  const handleChange = (locale: string) => handleLocale(locale);
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center">
        <Image
          src="/images/Dyarmix-Logo.png"
          alt="Logo"
          width={123}
          height={21}
        />
        <NavLinks />
      </div>
      <div>
        <button onClick={() => handleChange('ar')}>العربية</button>
        <span> | </span>
        <button onClick={() => handleChange('en')}>English (US)</button>
      </div>
    </header>
  );
}
