import Image from 'next/image';
import About from './_components/About';
import QualityAssurance from './_components/QualityAssurance';
import Team from './_components/Team';
import Vision from './_components/Vision';
export default function AboutUs() {
  return (
    <main>
      <Image
        src="/images/aboutsection.png"
        alt="aboutSection"
        width={1920}
        height={400}
        className="h-auto w-full"
      />
      <About />
      <Vision />
      <QualityAssurance />
      <Team />
    </main>
  );
}
