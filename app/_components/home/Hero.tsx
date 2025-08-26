import Button from '@/_components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div>
      <section className='flex h-[650px] items-center justify-center bg-[url("/images/Landing.jpg")] bg-cover bg-center text-white'>
        <article className="max-w-[1110px] text-center">
          <h1 className="text-[35px] sm:text-[48px] md:text-[64px]">
            Bringing Surfaces to Life – Quality that Lasts, Brilliance that
            Inspires
          </h1>
          <p className="text-[18px]">
            At Dyarmix, we provide innovative and comprehensive coating
            solutions, combining top-tier quality and durability to bring your
            projects lasting elegance and inspired finishes.
          </p>
        </article>
      </section>

      <section className="flex max-h-[445px] items-center justify-center gap-[100px] p-[100px] dark:bg-gray-900">
        <div className="max-w-[500px]">
          <Image
            src="/images/aboutland.png"
            alt="Landing"
            width={500}
            height={300}
            className="object-cover"
            style={{ clipPath: 'inset(0 round 30%)' }}
          />
        </div>
        <article className="max-w-[445px]">
          <h2 className="mb-[22px] text-[32px] dark:text-white">
            About our product line
          </h2>
          <p className="mb-[22px] dark:text-white">
            Dyarmix offers a comprehensive range of specialized chemical
            products for the construction sector, designed to meet the
            requirements of modern projects. Our products are tested in advanced
            laboratories to ensure their quality and suitability for various
            applications. We also continue to enhance our formulations in line
            with industry trends and customer needs.
          </p>
          <Link href="/productlist">
            <Button
              text={'Discover Our Products'}
              className="bg-[#DD7A7AAB] hover:bg-[#DD7A7A]"
            />
          </Link>
        </article>
      </section>
    </div>
  );
}
