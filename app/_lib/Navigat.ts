export type Slide = {
  title: string;
  content: string;
  image: string;
};
export const goPrev = (
  setIndex: React.Dispatch<React.SetStateAction<number>>,
  slides: Slide[],
) => {
  setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
};

export const goNext = (
  setIndex: React.Dispatch<React.SetStateAction<number>>,
  slides: Slide[],
) => {
  setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
};
