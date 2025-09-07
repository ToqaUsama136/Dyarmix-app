import { IoMdSearch } from 'react-icons/io';

export default function Search() {
  return (
    <div className="flex flex-col gap-4 px-[30px] pt-[40px] pb-[20px] md:flex-row md:items-center md:justify-between">
      <div className="relative flex h-[40px] items-center rounded-[6.4px] bg-[#F0F2F5] px-2 md:w-[860px]">
        <input type="text" placeholder="Search" />
        <IoMdSearch className="absolute right-3 h-[20px] w-[20px]" />
      </div>
      <div className="flex h-[40px] w-[174] items-center rounded-[6.4px] bg-[#F0F2F5] px-2">
        <span className="text-[#212529BF]">Sort By :</span>
        <select>
          <option>Featured</option>
        </select>
      </div>
    </div>
  );
}
