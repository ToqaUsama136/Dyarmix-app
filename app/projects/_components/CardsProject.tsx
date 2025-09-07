import Image from 'next/image';
import { Project, ProjectItem } from '../../_lib/Project';

export default function CardsProject() {
  return (
    <section className="px-[80px] py-[35px]">
      <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-2 lg:grid-cols-3">
        {Project.map((item: ProjectItem, index) => (
          <div
            key={index}
            className="flex h-[423px] w-[416px] flex-col items-center rounded-[6.4px] border border-[#21252926] px-8 py-2"
          >
            <Image src={item.image} alt={item.title} width={368} height={230} />
            <div className="w-[368px] py-4">
              <p className="py-2 text-[18px] font-medium">{item.title}</p>
              <p>{item.desc1}</p>
              <p>{item.desc2}</p>
              <p className="text-[#888888]">Learn more...</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
