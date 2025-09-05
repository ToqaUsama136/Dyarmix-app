import Image from 'next/image';
import { Member, TeamMembers } from '../../_lib/TeamMembers';

export default function TeamCards() {
  return (
    <div className="px-10 py-[32px]">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {TeamMembers.map((member: Member, index) => (
          <div className="flex items-start gap-4 py-[32px]" key={index}>
            <div className="hidden flex-shrink-0 md:block">
              <Image
                src={member.image}
                alt={member.name}
                width={135}
                height={135}
                className="rounded-[76.5px]"
              />
            </div>
            <div>
              <p className="font-medium">{member.name}</p>
              <p className="pb-2 text-[#212529BF]">{member.title}</p>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
