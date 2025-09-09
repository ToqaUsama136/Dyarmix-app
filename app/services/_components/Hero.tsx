import Image from 'next/image';
import CardsServices from './CardsServices';
import NavigateCustomer from './NavigateCustomer';
import Partener from './Partener';

export default function Hero() {
  return (
    <section>
      <Image
        src="/images/Services.png"
        alt="services"
        width={1940}
        height={100}
      />
      <CardsServices />
      <NavigateCustomer />
      <Partener />
    </section>
  );
}
