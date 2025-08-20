type buttonProps = {
  text: string;
  className: string;
  onClick?: () => void;
};
const Button = ({ className, text }: buttonProps) => {
  return (
    <button
      type="submit"
      className={`rounded-[5px] px-[16px] py-[12px] text-white transition-all duration-300 ease-out ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
