import CardsProduct from './_component/CardsProduct';
import Search from './_component/Search';
import SideBar from './_component/SideBar';

export default function productlist() {
  return (
    <div className="flex flex-col md:flex-row">
      <aside>
        <SideBar />
      </aside>
      <main className="ml-10 pb-14">
        <Search />
        <CardsProduct />
      </main>
    </div>
  );
}
