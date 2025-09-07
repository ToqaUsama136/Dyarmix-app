'use client';
import { useIndexer } from '@/_hooks/useIndexer';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import en from '../../../messages/en.json';
import Button from '../ui/Button';

interface Slide {
  title: string;
  content: string;
  image: string;
}
export default function Cement() {
  const { slider } = en as { slider: Slide[] };
  const {
    index,
    currentItem: slide,
    isLastSide,
    goNext,
    goPrev,
  } = useIndexer(slider);

  return (
    <div>
      <section
        className="flex items-center justify-center bg-cover bg-center md:h-[550px]"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        <article
          className={`max-w-[1000px] text-center ${
            isLastSide ? 'text-white' : 'text-black'
          }`}
        >
          <h2 className="text-[48px] font-bold md:text-[64px]">
            {slide.title}
          </h2>
          {index === 1 && (
            <h4 className="text-[18px] font-bold">
              Weather-Resistant Acrylic Paints
            </h4>
          )}
          <p className="ml-10 max-w-[350] text-center md:hidden">
            {slide.content}
          </p>
          <p className="hidden md:block">{slide.content}</p>
          <Button text={'Learn More...'} className="my-[22px] bg-[#0A58CA]" />
        </article>

        <button onClick={() => goPrev()} className="absolute left-0 md:left-12">
          <AiOutlineLeft className="h-[48px] w-[48px] text-white/70" />
        </button>

        <button
          onClick={() => goNext()}
          className="absolute right-0 md:right-12"
        >
          <AiOutlineRight className="h-[48px] w-[48px] text-white/70" />
        </button>
      </section>
    </div>
  );
}
