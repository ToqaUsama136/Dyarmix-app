import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
  name: string;
  title: string;
  desc: string;
};
export default function CardAbout({ src, alt, name, title, desc }: Props) {
  return (
    <div className="flex items-start gap-4 py-[32px]">
      <div className="hidden flex-shrink-0 md:block">
        <Image
          src={src}
          alt={alt}
          width={135}
          height={135}
          className="rounded-[76.5px]"
        />
      </div>
      <div>
        <p className="font-medium">{name}</p>
        <p className="pb-2 text-[#212529BF]">{title}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
}
