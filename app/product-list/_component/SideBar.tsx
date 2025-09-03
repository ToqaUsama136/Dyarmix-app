import NavLinksProudcts from './NavLinksProudcts';

export default function SideBar() {
  return (
    <div className="px-[30px] py-[40px]">
      <p className="py-4 text-[15px] font-bold">Categories</p>
      <NavLinksProudcts />
      <hr className="w-[260px] py-2 text-[#21252926]" />
      <div>
        <h3 className="font-bold">Tags</h3>
        <ul>
          <li className="flex items-center space-x-2">
            <input type="checkbox" id="acrylic" className="h-4 w-4" />
            <label htmlFor="acrylic" className="cursor-pointer">
              Acrylic
            </label>
          </li>
          <li className="flex items-center space-x-2">
            <input type="checkbox" id="cement" className="a h-4 w-4" />
            <label htmlFor="cement" className="cursor-pointer">
              Cement
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
}
