import Image from 'next/image';
import CardsProject from './_components/CardsProject';
import Hero from './_components/Hero';

export default function Projects() {
  return (
    <main>
      <Image
        src="/images/projectsec.png"
        alt="aboutSection"
        width={1920}
        height={400}
        className="h-auto w-full"
      />
      <Hero />
      <CardsProject />
    </main>
  );
}
