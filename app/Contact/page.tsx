import Button from '@/_components/ui/Button';
import Image from 'next/image';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  return (
    <section>
      <Image
        src="/images/contact.png"
        alt="contact"
        width={1540}
        height={100}
      />
      <div className="grid grid-cols-1 gap-40 px-8 py-[25px] md:items-start md:px-[60px] lg:grid-cols-2">
        <div className="w-[740px]">
          <p className="text-[18px] font-light">
            For more information on how we can support your project, feel free
            to contact our team. At DyarMix, we are committed to providing the
            best construction chemical solutions, relying on quality
            reliability, and exceptional service.
          </p>

          <form className="grid grid-cols-1 gap-[50px] px-4 py-[20px] md:grid-cols-2 md:px-0">
            <div>
              <label className="block">Name*</label>
              <input
                className="block h-[30px] w-full rounded-[5px] border border-[#21252926]"
                type="text"
              />
            </div>
            <div>
              <label className="block">Phone Number</label>
              <input
                className="block h-[30px] w-full rounded-[5px] border border-[#21252926]"
                type="text"
              />
            </div>
            <div>
              <label className="block">Email*</label>
              <input
                className="block h-[30px] w-full rounded-[5px] border border-[#21252926]"
                type="text"
              />
            </div>
            <div>
              <label className="block">Address</label>
              <input
                className="block h-[30px] w-full rounded-[5px] border border-[#21252926]"
                type="text"
              />
            </div>
            <div>
              <label className="block">Subject*</label>
              <input
                className="block h-[30px] w-full rounded-[5px] border border-[#21252926]"
                type="text"
              />
            </div>
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
              <textarea className="block h-[204px] w-[738px] rounded-[6px] border border-[#21252926]" />
            </div>

            <div className="-mt-[30px] flex justify-end md:col-span-2">
              {' '}
              <Button text={'Submit'} className="bg-[#0A58CA]" />
            </div>
          </form>
        </div>
        <div className="space-y-4 px-[10px] md:px-[130px]">
          <h2 className="font-[18px] font-medium">Dyarmix</h2>
          <div className="flex items-start gap-2">
            <IoLocationSharp className="flex-shrink-0" />{' '}
            <span>
              37 9th Zone the Industrial Area - Basateen El Ismailia Area - El
              Zwamel - Belbeis - Sharkia Governorate
            </span>
          </div>
          <div className="flex items-start gap-2">
            <FaPhoneAlt />
            <span> +20 101 027 5680</span>
          </div>
          <div className="flex items-start gap-2">
            <MdEmail />
            <span> m.abdallah@dyarmix.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
