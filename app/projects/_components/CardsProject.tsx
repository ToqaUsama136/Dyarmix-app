import { Project, ProjectItem } from '../../_lib/project';
import CardProject from './CardProject';

export default function CardsProject() {
  return (
    <section className="py-[35px] pl-6 md:px-[80px]">
      <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-2 md:items-center lg:grid-cols-3">
        {Project.map((item: ProjectItem, index) => (
          <CardProject
            key={index}
            img={item.image}
            title={item.title}
            desc1={item.desc1}
            desc2={item.desc2}
          />
        ))}
      </div>
    </section>
  );
}
