import React from 'react';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div>
      <section className='bg-[url("/images/Landing.jpg")] bg-cover bg-center h-[650px] flex items-center justify-center  text-white  '>
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

      <section className="flex gap-[100px] items-center justify-center p-[100px] max-h-[445px]">
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
          <h2 className="text-[32px]">About our product line</h2>
          <p>
            Dyarmix offers a comprehensive range of specialized chemical
            products for the construction sector, designed to meet the
            requirements of modern projects. Our products are tested in advanced
            laboratories to ensure their quality and suitability for various
            applications. We also continue to enhance our formulations in line
            with industry trends and customer needs.
          </p>
          <button className="bg-black text-white py-2 px-4 rounded-full mt-4">
            Dicover our Products
          </button>
        </article>
      </section>
    </div>
  );
};
