import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/product', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/aboutus', label: 'About Us' },
  { href: '/contactus', label: 'Contact Us' },
];
const Navlinks = () => {
  return (
    <nav>
      <ul className="hidden space-x-4 px-4 leading-none md:flex">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}{' '}
      </ul>
    </nav>
  );
};

export default Navlinks;
