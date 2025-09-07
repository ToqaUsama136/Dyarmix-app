'use client';
import ButtonLeft from '@/_components/ui/ButtonLeft';
import ButtonRight from '@/_components/ui/ButtonRight';
import { useIndexer } from '@/_hooks/useIndexer';
import { projectNav } from '@/_lib/projectNav';
import Image from 'next/image';

export default function ProjectNav() {
  const { currentItem: project, goPrev, goNext } = useIndexer(projectNav);
  return (
    <div>
      <div>
        <Image src={project.image} alt="picture" width={350} height={350} />
      </div>

      <ButtonRight goNext={goNext} />
      <ButtonLeft goPrev={goPrev} />
    </div>
  );
}
