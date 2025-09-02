import TeamCards from './TeamCards';

export default function Team() {
  return (
    <section className="px-[40px] py-[50px] md:px-[80px]">
      <div>
        <p className="text-[30px] font-medium">Meet Our Team of Experts</p>
        <p className="text-[18px] font-light">
          Dedicated professionals driving our success in the paint industry
        </p>
      </div>
      <TeamCards />
    </section>
  );
}
