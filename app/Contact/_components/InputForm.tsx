type Input = {
  label: string;
  type?: string;
  required?: boolean;
};
export default function InputForm({
  label,
  type = 'text',
  required = false,
}: Input) {
  return (
    <div>
      <label className="block">
        {label}
        {required && '*'}
      </label>
      <input
        className="block h-[30px] w-full rounded-[5px] border border-[#21252926]"
        type={type}
      />
    </div>
  );
}
