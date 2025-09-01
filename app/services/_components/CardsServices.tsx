import Image from 'next/image';
import en from '../../../messages/en.json';

type ServiceItem = {
  image: string;
  title: string;
  desc: string;
};

export default function CardsServices() {
  const services: ServiceItem[] = en.services;
  return (
    <div className="grid grid-cols-1 gap-1 px-[50px] py-[35px] md:grid-cols-3">
      {services.map((service, index) => (
        <div
          key={index}
          className="w-[416px] justify-items-center rounded-[6.4px] border border-[#21252926] p-[15px]"
        >
          <Image
            src={service.image}
            alt={service.title}
            width={368}
            height={230}
          />
          <div className="pl-[25px] text-[#212529]">
            <p className="py-2 text-[18px] font-medium">{service.title}</p>
            <p className="w-[377px] p-2">{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
