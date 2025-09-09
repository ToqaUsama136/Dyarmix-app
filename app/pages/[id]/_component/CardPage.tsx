import Button from '@/_components/ui/Button';
import Image from 'next/image';
import TablePages from './TablePages';

type Props = {
  titles: string;
  desc: string;
};
export default function CardPage({ titles, desc }: Props) {
  return (
    <div className="flex flex-col px-[10px] py-[10px] md:flex-row">
      <div className="w-[720px]">
        <Image src="/images/pages.png" alt="pages" width={630} height={418} />
      </div>
      <div className="flex-1">
        <p className="pb-2 text-[30px] font-bold">{titles}</p>
        <p className="w-[680px] text-[#212529]">{desc}</p>
        <TablePages />
        <Button text={'Contact Us'} className={'my-4 bg-[#0A58CA]'} />
        <div className="pt-2">
          <hr className="w-[700px] text-[#21252926]" />
          <p className="pt-4 text-[#212529BF]">
            <span className="font-bold">Internal Reference:</span>
            CE{titles}
          </p>
        </div>
      </div>
    </div>
  );
}
