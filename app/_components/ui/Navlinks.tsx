import Link from 'next/link';

type Props = {
  className?: string;
  vertical?: boolean;
};
const links = [
  { href: '/', label: 'Home' },
  { href: '/product', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/aboutus', label: 'About Us' },
  { href: '/contactus', label: 'Contact Us' },
];

export default function NavLinks({ className = '', vertical = false }: Props) {
  return (
    <nav>
      <ul
        className={`${
          vertical
            ? 'flex flex-col gap-2'
            : 'hidden space-x-4 px-4 leading-none md:flex'
        } ${className}`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}{' '}
      </ul>
    </nav>
  );
}
