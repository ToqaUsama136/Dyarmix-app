import { cardServices, ServiceItem } from '@/_lib/card-services';
import Image from 'next/image';

export default function CardsServices() {
  return (
    <div className="grid grid-cols-1 gap-1 px-[20px] py-[35px] md:grid-cols-3 md:px-[50px]">
      {cardServices.map((service: ServiceItem, index) => (
        <div
          key={index}
          className="w-[370px] rounded-[6.4px] border border-[#21252926] p-[15px] md:w-[416px] md:justify-items-center"
        >
          <Image
            src={service.image}
            alt={service.title}
            width={368}
            height={230}
          />
          <div className="pl-[25px] text-[#212529]">
            <p className="py-2 text-[18px] font-medium">{service.title}</p>
            <p className="p-2 md:w-[377px]">{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
