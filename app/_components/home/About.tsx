import Image from 'next/image';
import Button from '../ui/Button';

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#F0F2F5]">
      <div className="absolute bottom-0 left-0 z-0 w-full">
        <Image
          src="/images/Component 2.png"
          alt="style"
          width={1920}
          height={1920}
        />
      </div>
      <div className="mx-w-[1320px] relative z-10 container grid grid-cols-1 items-center gap-[200px] px-[100px] py-[80px] lg:grid-cols-2">
        <article className="max-w-[430px] p-[10px]">
          <h2 className="mt-[10px] text-[44px] font-medium">Who we are</h2>
          <h3 className="mt-[10px] text-[29px] font-medium">
            A team of industry experts, passionate about new technologies &
            progress
          </h3>
          <p className="mt-[10px] text-[#212529]">
            Dyarmix has proven itself as a trusted partner for professionals in
            the construction and building sector, thanks to our high-quality
            products that meet the needs of the Egyptian and Middle Eastern
            markets. We are committed to the highest standards of quality and
            safety, ensuring that our products are manufactured according to the
            latest international specifications to meet modern project
            requirements and achieve customer satisfaction.
          </p>
          <Button
            text={'Contact us'}
            className="z-10 mt-[10px] bg-[#DD7A7A] hover:bg-[#DD7A7AAB]"
          />
        </article>
        <div className="z-10 flex max-w-[575px] flex-col items-center gap-8 lg:items-start">
          <Image
            src="/images/About.jpg"
            alt="colors"
            width={410}
            height={280}
            className="rounded-[10px] object-cover"
          />
          <div className="-ml-[35px] hidden items-center gap-12 font-light md:flex">
            <div>
              <p className="text-[80px]">15+</p>
              <p className="text-[20px]">Clients</p>
            </div>
            <div>
              <p className="text-[80px]">25+</p>
              <p className="text-[20px]">Projects</p>
            </div>
            <div>
              <p className="text-[80px]">8+</p>
              <p className="text-[20px]">Innovative Paints</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
