import { IoMdSearch } from 'react-icons/io';

export default function SearchPages() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex h-[38px] items-center rounded-[6.4px] bg-[#F0F2F5] px-2 md:w-[360px]">
        <input type="text" placeholder="Search" />
        <IoMdSearch className="absolute -right-[350px] h-[20px] w-[20px] md:right-[80px]" />
      </div>
    </div>
  );
}
