import Button from '@/_components/ui/Button';
import Image from 'next/image';
import { DataProduct, Product } from '../../../_lib/DataProduct';
import TablePages from './TablePages';

export default function Cards() {
  return (
    <div>
      {DataProduct.map((item: Product, index) => (
        <div
          key={index}
          className="flex flex-col px-[10px] py-[10px] md:flex-row"
        >
          <div className="w-[720px]">
            <Image
              src="/images/pages.png"
              alt="pages"
              width={630}
              height={418}
            />
          </div>
          <div className="flex-1">
            <p className="pb-2 text-[30px] font-bold">{item.title}</p>
            <p className="w-[680px] text-[#212529]">{item.desc}</p>
            <TablePages />
            <Button text={'Contact Us'} className={'my-4 bg-[#0A58CA]'} />
            <div className="pt-2">
              <hr className="w-[700px] text-[#21252926]" />
              <p className="pt-4 text-[#212529BF]">
                <span className="font-bold">Internal Reference:</span>
                CE{item.title}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
