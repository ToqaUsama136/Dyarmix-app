import Image from 'next/image';
import { Product, productList } from '../../_lib/dataProductList';

export default function CardsProduct() {
  return (
    <div className="pr-[100px] pl-[30px]">
      <div className="grid grid-cols-1 items-start gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {productList.map((item: Product, index) => (
          <div
            className="h-[328px] w-[226] rounded-b-[6.4px] border border-[#21252926]"
            key={index}
          >
            <Image src={item.image} alt={item.title} width={226} height={226} />
            <div className="px-4 py-2">
              <p className="text-[15px] font-medium text-[#0A58CA]">
                {item.title}
              </p>
              <p className="py-1 text-[14px] text-[#212529B2]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
