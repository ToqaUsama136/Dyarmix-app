import { Member, TeamMembers } from '../../_lib/team-members';
import CardAbout from './CardAbout';

export default function TeamCards() {
  return (
    <div className="px-10 py-[32px]">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {TeamMembers.map((member: Member, index) => (
          <CardAbout
            key={index}
            src={member.image}
            alt={member.name}
            name={member.name}
            title={member.title}
            desc={member.description}
          />
        ))}
      </div>
    </div>
  );
}
