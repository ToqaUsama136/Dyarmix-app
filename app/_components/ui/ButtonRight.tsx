import { AiOutlineRight } from 'react-icons/ai';

type Props = {
  goNext: () => void;
  className?: string;
};
export default function ButtonRight({ goNext, className = '' }: Props) {
  return (
    <div>
      <button
        onClick={() => goNext()}
        className={`absolute right-0 md:right-12 ${className}`}
      >
        <AiOutlineRight className="h-[48px] w-[48px] text-white/70" />
      </button>
    </div>
  );
}
