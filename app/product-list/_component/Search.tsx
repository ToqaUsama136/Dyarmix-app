import { IoMdSearch } from 'react-icons/io';

export default function Search() {
  return (
    <div className="flex items-center justify-between gap-4 px-[30px] pt-[40px] pb-[20px]">
      <div className="flex h-[40px] w-[860px] items-center rounded-[6.4px] bg-[#F0F2F5] px-2">
        <input type="text" placeholder="Search" />
        <IoMdSearch className="absolute right-[300px] h-[20px] w-[20px]" />
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
