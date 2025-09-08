import Image from 'next/image';

type Props = {
  img: string;
  title: string;
  desc1?: string;
  desc2?: string;
};

export default function CardProject({ img, title, desc1, desc2 }: Props) {
  return (
    <div className="flex h-[423px] w-[340px] flex-col items-center rounded-[6.4px] border border-[#21252926] px-8 py-2 md:w-[416px]">
      <Image src={img} alt={title} width={368} height={230} />
      <div className="py-4 md:w-[368px]">
        <p className="py-2 text-[18px] font-medium">{title}</p>
        <p>{desc1}</p>
        <p>{desc2}</p>
        <p className="text-[#888888]">Learn more...</p>
      </div>
    </div>
  );
}
