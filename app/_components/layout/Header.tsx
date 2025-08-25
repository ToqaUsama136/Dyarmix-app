import Navlinks from '@/_components/ui/Navlinks';

import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center">
        <Image
          src="/images/Dyarmix-Logo.png"
          alt="Logo"
          width={123}
          height={21}
        />
        <Navlinks />
      </div>
      <div>
        <button>العربية</button>
        <span> | </span>
        <button>English (US)</button>
      </div>
    </header>
  );
}
