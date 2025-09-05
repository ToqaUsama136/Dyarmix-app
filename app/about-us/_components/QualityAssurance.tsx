import Button from '@/_components/ui/Button';
import Image from 'next/image';

export default function QualityAssurance() {
  return (
    <section className="flex flex-col gap-[100px] px-[40px] py-[100px] md:flex-row md:items-center md:px-[160px]">
      <div className="w-full md:w-[550px]">
        <p className="pb-2 text-[29px] font-medium">Quality Assurance</p>
        <p className="pb-2">
          Quality is the foundation of our work. At DyarMix, we have a team of
          expert chemists and engineers dedicated to designing and manufacturing
          DyarMix products according to the highest international standards,
          meeting the ever-changing market demands. All our products undergo
          stringent testing to ensure their effectiveness and ease of use in
          various applications, making them the reliable choice for our
          customers in the construction sector and reinforcing our position as a
          leading company.
        </p>
        <Button text={'Contact Us'} className={'bg-[#CC3838AB]'} />
      </div>
      <div>
        <Image
          src="/images/vision.jpg"
          alt=""
          width={480}
          height={320}
          className="rounded-[6.4px]"
        />
      </div>
    </section>
  );
}
