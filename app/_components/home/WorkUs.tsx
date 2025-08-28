import { FaRegCreditCard } from 'react-icons/fa6';
import { PiTelegramLogo } from 'react-icons/pi';
import en from '../../../messages/en.json';

type IconName = keyof typeof icons;
interface Feature {
  title: string;
  content: string;
  image: string;
  icon: IconName;
}
const icons = {
  PiTelegramLogo: <PiTelegramLogo className="text-2xl text-gray-700" />,
  FaRegCreditCard: <FaRegCreditCard className="text-2xl text-gray-700" />,
};
export default function WorkUs() {
  const { feature } = en as { feature: Feature[] };
  return (
    <div className="px-[100px] py-[50px]">
      <article className="pb-[70px]">
        <h2 className="text-[29px] font-medium">Why work with us</h2>
        <p className="text-[18px] font-light">
          We ensure a sophisticated, modern approach with lasting results.
        </p>
      </article>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {feature.map((feature: Feature, index: number) => (
          <div
            className="w-[280px] gap-[24px] md:h-[203px] md:min-w-[420px]"
            key={index}
          >
            <div
              className="absolute z-0 hidden md:block"
              style={{
                backgroundImage: `url(${feature.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '203px',
                width: '420px',
              }}
            ></div>
            <div className="relative z-10">
              <div className="mt-[30px] flex h-[48px] w-[48px] items-center justify-center bg-[#F0F2F5]">
                {icons[feature.icon]}
              </div>
              <h3 className="text-[18px] font-medium">{feature.title}</h3>
              <p>{feature.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
