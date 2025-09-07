import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa6';

export default function NavigateCustomer() {
  return (
    <div
      className="bg-crnter relative h-full w-full bg-cover"
      style={{ backgroundImage: "url('/images/customer1.jpg')" }}
    >
      <div className="relative z-10 flex items-center justify-center p-[48px]">
        <div className="absolute top-[25px] flex h-[45px] w-[45px] items-center justify-center rounded-[6.4px] bg-[#0A58CA] text-white">
          <FaQuoteRight />
        </div>
        <div className="h-[296px] w-[786px] rounded-[6.4px] bg-white p-[48px]">
          <p className="text-center text-[24px]">
            Our customers rave about the quality and vibrancy of our paints.
            They truly transform spaces!
          </p>
          <div className="flex flex-col items-center justify-center p-[30px]">
            <Image
              src="/images/customer11.jpg"
              alt=""
              width={48}
              height={48}
              className="rounded-[50%]"
            />
            <p className="pt-2 text-[14px] font-bold">Jane DOE</p>
            <p className="text-[14px]">CEO of Paint Division</p>
          </div>
        </div>
      </div>
    </div>
  );
}
