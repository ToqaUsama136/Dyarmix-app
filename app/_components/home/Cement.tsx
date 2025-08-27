'use client';
import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { slider } from '../../../messages/en.json';
import { goNext, goPrev } from '../../_lib/Navigat';
import Button from '../ui/Button';
export default function Cement() {
  const [Index, setIndex] = useState(0);
  const slides = slider;
  const slide = slides[Index];

  const isLastSlide = Index === slides.length - 1;

  return (
    <div>
      <section
        className="flex h-[550px] items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <article
          className={`max-w-[1000px] text-center ${
            isLastSlide ? 'text-white' : 'text-black'
          }`}
        >
          <h2 className="text-[48px] font-bold md:text-[64px]">
            {slide.title}
          </h2>
          {Index === 1 && (
            <h4 className="text-[18px] font-bold">
              Weather-Resistant Acrylic Paints
            </h4>
          )}
          <p>{slide.content}</p>
          <Button text={'Learn More...'} className="my-[22px] bg-[#0A58CA]" />
        </article>

        <button
          onClick={() => goPrev(setIndex, slides)}
          className="absolute left-12"
        >
          <AiOutlineLeft className="hidden h-[48px] w-[48px] text-white md:block" />
        </button>

        <button
          onClick={() => goNext(setIndex, slides)}
          className="absolute right-12"
        >
          <AiOutlineRight className="hidden h-[48px] w-[48px] text-white md:block" />
        </button>
      </section>
    </div>
  );
}
