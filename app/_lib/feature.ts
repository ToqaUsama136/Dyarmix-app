import { IconType } from 'react-icons';
import { FaRegCreditCard } from 'react-icons/fa6';
import { PiTelegramLogo } from 'react-icons/pi';

export type Feature = {
  title: string;
  content: string;
  image: string;
  icon: IconType;
};

export const feature: Feature[] = [
  {
    image: 'images/work1.png',
    icon: PiTelegramLogo,
    title: 'Extensive Experience',
    content:
      'Over a decade of experience in the construction chemical sector..',
  },
  {
    image: 'images/work2.png',
    icon: FaRegCreditCard,
    title: 'Certified Quality',
    content:
      'Our products undergo stringent testing and comply with international standards.',
  },
  {
    image: 'images/work3.png',
    icon: PiTelegramLogo,
    title: 'Customer Focus',
    content:
      'We offer after-sales support services to ensure customer satisfaction.',
  },
  {
    image: 'images/work3.png',
    icon: FaRegCreditCard,
    title: 'Specialized Team',
    content:
      'Experienced engineers, chemists, and administrators guarantee the highest quality standards.',
  },
  {
    image: 'images/work3.png',
    icon: PiTelegramLogo,
    title: 'Continuous Development',
    content:
      'We strive to keep up with developments in the construction sector to continually improve our products.',
  },
];
