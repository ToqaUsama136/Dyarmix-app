import Button from '@/_components/ui/Button';
import Image from 'next/image';
export default function AboutUs() {
  return (
    <section className="flex flex-col items-center gap-[200px] px-[40px] py-[30px] md:flex-row md:px-[100px] md:py-[60px]">
      <div className="w-[300px] p-[15px] md:w-[550px]">
        <h2 className="py-4 text-[29px] font-medium">About Us</h2>
        <p>
          DyarMix is a leading Egyptian company specializing in manufacturing
          and distributing construction chemicals. Since our establishment in
          2016, DyarMix has proven itself as a trusted partner for professionals
          in the construction and building sector, thanks to our high-quality
          products that meet the needs of the Egyptian and Middle Eastern
          markets. We are committed to the highest standards of quality and
          safety, ensuring that our products are manufactured according to the
          latest international specifications to meet modern project
          requirements and achieve customer satisfaction. DyarMix continuously
          strives for innovation and excellence in construction solutions,
          making us a reliable partner for industry professionals in the region.
        </p>
        <p className="py-4">
          At DyarMix, our goal is to provide innovative chemical products for
          the construction sector, combining high quality with added value to
          support professionals in building durable and safe structures suitable
          for various environments. We prioritize customer satisfaction by
          offering reliable solutions that enhance our lasting partnership with
          them.
        </p>
        <Button text={'Contact Us'} className={'bg-[#CC3838AB]'} />
      </div>
      <div className="hidden flex-1 flex-shrink-0 pl-[30px] md:block">
        <Image
          src="/images/About.jpg"
          alt="about"
          width={490}
          height={269}
          className="rounded-[6.4px]"
        />
      </div>
    </section>
  );
}
