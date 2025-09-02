import Image from 'next/image';
import { BsPerson } from 'react-icons/bs';
import { IoIosStarOutline } from 'react-icons/io';

export default function Vision() {
  return (
    <section className="grid grid-cols-1 gap-8 px-[40px] md:px-[160px] md:py-[48px] lg:grid-cols-2">
      <div className="px-[20px] py-[45px]">
        <Image
          src="/images/vision.jpg"
          alt=""
          width={480}
          height={320}
          className="hidden rounded-[6.4px] md:block"
        />
      </div>
      <div>
        <div className="py-2">
          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[6.4px] bg-[#F0F2F5] md:absolute md:left-[700px]">
            <IoIosStarOutline />
          </div>
          <p className="pb-2 text-[18px] font-medium">Our Vision</p>
          <p>
            At DyarMix, our vision is to become a leader in chemical
            manufacturing for the construction sector in Egypt and the Middle
            East. We believe that leadership comes from a commitment to quality
            and innovation, providing high-value products that ensure we are the
            first choice for our customers, meeting the growing market needs,
            and exceeding customer expectations.
          </p>
        </div>
        <div className="py-[30px]">
          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[6.4px] bg-[#F0F2F5] md:absolute md:left-[700px]">
            <BsPerson />
          </div>
          <p className="pb-2 text-[18px] font-medium">Our Mission</p>
          <p>
            At DyarMix, our mission is to be the leading company in the
            production of construction chemicals in Egypt and the Middle East.
            We strive to deliver superior chemical products for the construction
            sector that combine quality, innovation, and value, supporting
            professionals in building durable structures in various
            environments. We aim to achieve customer satisfaction by making them
            partners who rely on our services and unique expertise.
          </p>
        </div>
      </div>
    </section>
  );
}
