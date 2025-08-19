type buttonProps = {
  text: string;
  className: string;
  onClick?: () => void;
};
const Button = ({ className, text }: buttonProps) => {
  return (
    <button
      type="submit"
      className={`rounded-[5px] text-white transition-all 
                duration-300 ease-out py-[12px] px-[16px] 
                ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
