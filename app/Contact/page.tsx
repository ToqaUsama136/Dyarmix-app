import Image from 'next/image';
import Hero from './_components/Hero';

export default function Contact() {
  return (
    <section>
      <Image
        src="/images/contact.png"
        alt="contact"
        width={1540}
        height={100}
      />
      <Hero />
    </section>
  );
}
