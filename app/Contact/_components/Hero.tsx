import { FaPhoneAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import Form from './Form';

export default function Hero() {
  return (
    <div className="grid grid-cols-1 gap-40 px-8 py-[25px] md:items-start md:px-[60px] lg:grid-cols-2">
      <div className="w-[740px]">
        <p className="text-[18px] font-light">
          For more information on how we can support your project, feel free to
          contact our team. At DyarMix, we are committed to providing the best
          construction chemical solutions, relying on quality reliability, and
          exceptional service.
        </p>

        <Form />
      </div>
      <div className="space-y-4 px-[10px] md:px-[130px]">
        <h2 className="font-medium">Dyarmix</h2>
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
  );
}
