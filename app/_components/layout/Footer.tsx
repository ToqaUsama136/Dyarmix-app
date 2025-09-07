import NavLinks from '@/_components/ui/Navlinks';
import { MdEmail, MdOutlineContactSupport, MdPhone } from 'react-icons/md';
import SocialLinks from '../ui/SocialLinks';
export default function Footer() {
  return (
    <footer className="bg-[#141F2E] px-8 py-12 text-white">
      <div className="mx-auto grid w-[80%] grid-cols-1 gap-[75px] md:grid-cols-3">
        <div>
          <h3 className="medium pb-6 text-[18px]">Useful Links</h3>
          <NavLinks vertical className="space-y-[-2px]" />
        </div>
        <div className="md:min-w-[504px]">
          <h3 className="pb-6 text-[18px] font-medium">About us</h3>
          <p>
            Dyarmix has proven itself as a trusted partner for professionals in
            the construction and building sector, thanks to our high-quality
            products that meet the needs of the Egyptian and Middle Eastern
            markets. We are committed to the highest standards of quality and
            safety, ensuring that our products are manufactured according to the
            latest international specifications to meet modern project
            requirements and achieve customer satisfaction.
          </p>
        </div>

        <div className="md:pl-[140px]">
          <h3 className="medium pb-6 text-[18px]">Connect with us</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <MdOutlineContactSupport className="h-[16px] w-[16px]" />
              <span>Contact us</span>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="h-[16px] w-[16px]" />
              <span>m.abdallah@dyarmix.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MdPhone className="h-[16px] w-[16px]" />
              <span>+20 101 027 5680</span>
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
}
