import Button from '@/_components/ui/Button';
import InputForm from './InputForm';
export default function Form() {
  return (
    <div>
      <form className="grid h-[640] grid-cols-1 gap-[50px] px-4 py-[20px] md:grid-cols-2 md:px-0">
        <InputForm label="Name" required />
        <InputForm label="Phone Number" />
        <InputForm label="Email" required />
        <InputForm label="Address" />
        <InputForm label="Subject" required />

        <div>
          <label className="block">Role</label>
          <select className="focus:ring-bg-[#21252926] block h-[30px] w-full rounded-[5px] border border-[#21252926] bg-white focus:text-black focus:outline-none">
            <option disabled selected className="text-[#21252926]">
              I Am A.....
            </option>
            <option>Contracting Company</option>
            <option>Engineer</option>
            <option>Contracting Company</option>
            <option>Import & Export Company</option>
            <option>Showroom</option>
            <option>Consultant</option>
          </select>
        </div>
        <div>
          <label className="block">Question</label>
          <textarea className="block h-[204px] w-[360px] rounded-[6px] border border-[#21252926] md:w-[738px]" />
        </div>

        <div className="-mt-[30px] flex justify-end md:col-span-2">
          {' '}
          <Button text={'Submit'} className="bg-[#0A58CA]" />
        </div>
      </form>
    </div>
  );
}
