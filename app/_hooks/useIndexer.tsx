'use client';
import { useState } from 'react';

export function useIndexer<T>(data: T[]) {
  const [index, setIndex] = useState(0);

  const goNext = () => {
    setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  return {
    index,
    isLastSide: index === data.length - 1,
    currentItem: data[index],
    goNext,
    goPrev,
  };
}
