import { AiOutlineLeft } from 'react-icons/ai';

type Props = {
  goPrev: () => void;
  className?: string;
};
export default function ButtonLeft({ goPrev, className = '' }: Props) {
  return (
    <div>
      <button
        onClick={() => goPrev()}
        className={`absolute left-0 md:left-12 ${className}`}
      >
        <AiOutlineLeft className="h-[48px] w-[48px] text-white/70" />
      </button>
    </div>
  );
}
