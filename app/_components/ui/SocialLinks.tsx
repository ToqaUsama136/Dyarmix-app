import {
  FaFacebookF,
  FaHouse,
  FaLinkedinIn,
  FaXTwitter,
} from 'react-icons/fa6';
export default function SocialLinks() {
  return (
    <div className="mt-6 flex gap-1">
      <a
        href="#"
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-[#0F1A26]"
      >
        <FaFacebookF className="text-[#3B5999]" />
      </a>
      <a
        href="#"
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-[#0F1A26]"
      >
        <FaXTwitter />
      </a>
      <a
        href="#"
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-[#0F1A26]"
      >
        <FaLinkedinIn className="text-[#0077B5]" />
      </a>
      <a
        href="#"
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white text-[#0F1A26]"
      >
        <FaHouse />
      </a>
    </div>
  );
}
