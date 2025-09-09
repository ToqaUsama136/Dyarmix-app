'use client';
import { useIndexer } from '@/_hooks/useIndexer';
import { slider } from '@/_lib/slider';
import Button from '../ui/Button';
import ButtonLeft from '../ui/ButtonLeft';
import ButtonRight from '../ui/ButtonRight';

export default function Cement() {
  const {
    index,
    currentItem: slide,
    isLastSide,
    goPrev,
    goNext,
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
          <p className="ml-10 max-w-[350px] text-center md:hidden">
            {slide.content}
          </p>
          <p className="hidden md:block">{slide.content}</p>
          <Button text={'Learn More...'} className="my-[22px] bg-[#0A58CA]" />
        </article>
        <ButtonLeft goPrev={goPrev} />
        <ButtonRight goNext={goNext} />
      </section>
    </div>
  );
}
