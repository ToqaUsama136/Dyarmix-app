import Link from 'next/link';

const links = [
  { href: '/all-products', label: 'All Products' },
  { href: '/cement', label: 'Cement' },
  { href: '/acrylic', label: 'Acrylic' },
  { href: '/adhesives', label: 'Adhesives' },
  { href: '/cement-putty', label: 'Cement Putty' },
];

export default function NavLinksProudcts() {
  return (
    <nav>
      <ul className="space-y-2 pb-4 leading-none text-[#094DB2]">
        {links.map((link, index) => (
          <li
            key={link.href}
            className={
              index === 0 ? 'underline decoration-1 underline-offset-4' : ''
            }
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}{' '}
      </ul>
    </nav>
  );
}
