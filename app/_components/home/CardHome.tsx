import { IconType } from 'react-icons';

type Props = {
  img: string;
  title: string;
  content: string;
  icon: IconType;
};
export default function CardHome({ img, title, content, icon: Icon }: Props) {
  return (
    <div className="w-[280px] gap-[24px] md:h-[203px] md:min-w-[420px]">
      <div
        className="absolute z-0 hidden md:block"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '203px',
          width: '420px',
        }}
      ></div>
      <div className="relative z-10">
        <div className="mt-[30px] flex h-[48px] w-[48px] items-center justify-center bg-[#F0F2F5]">
          <Icon className="text-2xl text-gray-700" />
        </div>
        <h3 className="text-[18px] font-medium">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
}
