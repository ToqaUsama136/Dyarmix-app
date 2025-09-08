'use client';
import ButtonLeft from '@/_components/ui/ButtonLeft';
import ButtonRight from '@/_components/ui/ButtonRight';
import { useIndexer } from '@/_hooks/useIndexer';
import { Customers } from '@/_lib/customers';
import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa6';
export default function NavigateCustomer() {
  const { currentItem: custom, goPrev, goNext } = useIndexer(Customers);
  return (
    <div
      className="relative h-full w-full bg-cover bg-center"
      style={{ backgroundImage: `url('${custom.imagebg}')` }}
    >
      <div className="relative z-10 flex items-center justify-center p-[48px]">
        <div className="absolute top-[25px] flex h-[45px] w-[45px] items-center justify-center rounded-[6.4px] bg-[#0A58CA] text-white">
          <FaQuoteRight />
        </div>
        <div className="rounded-[6.4px] bg-white p-[48px] md:h-[296px] md:w-[786px]">
          <p className="text-center text-[24px]">{custom.content}</p>
          <div className="flex flex-col items-center justify-center p-[30px]">
            <Image
              src={custom.image}
              alt=""
              width={48}
              height={48}
              className="rounded-[50%]"
            />
            <p className="pt-2 text-center text-[14px] font-bold">
              {custom.title}
            </p>
            <p className="text-center text-[14px]">{custom.desc}</p>
          </div>
        </div>{' '}
        <ButtonRight goNext={goNext} className="h-[48px] w-[48px]" />{' '}
        <ButtonLeft goPrev={goPrev} className="h-[48px] w-[48px]" />
      </div>
    </div>
  );
}
