import Link from 'next/link';
import Cards from './_component/Cards';
import SearchPages from './_component/SearchPages';

export default async function Pages({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main>
      <div className="flex justify-between gap-[300px] px-16 md:gap-0">
        <div className="py-2">
          <Link href="#">AllProducts / {id}</Link>
        </div>
        <SearchPages />
      </div>
      <Cards />
    </main>
  );
}
