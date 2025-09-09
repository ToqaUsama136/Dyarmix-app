import Image from 'next/image';
import CardsProject from './_components/CardsProject';
import EgyptionProject from './_components/EgyptionProject';
import Hero from './_components/Hero';
import ProjectNav from './_components/ProjectNav';

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
      <ProjectNav />
      <EgyptionProject />
      <CardsProject />
    </main>
  );
}
