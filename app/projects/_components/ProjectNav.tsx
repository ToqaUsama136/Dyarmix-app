'use client';
import ButtonLeft from '@/_components/ui/ButtonLeft';
import ButtonRight from '@/_components/ui/ButtonRight';
import { useIndexer } from '@/_hooks/useIndexer';
import { projectNav } from '@/_lib/projectNav';
import Image from 'next/image';

export default function ProjectNav() {
  const { currentItem: project, goPrev, goNext } = useIndexer(projectNav);
  return (
    <section className="py-[20px]">
      <div className="relative w-full bg-gray-100">
        <div className="relative flex items-center justify-center">
          <Image src={project.image} alt="picture" width={500} height={456} />
          <ButtonRight
            goNext={goNext}
            className="rounded-[6.5px] md:bg-gray-300"
          />
          <ButtonLeft
            goPrev={goPrev}
            className="rounded-[6.5px] md:bg-gray-300"
          />
        </div>
      </div>
    </section>
  );
}
