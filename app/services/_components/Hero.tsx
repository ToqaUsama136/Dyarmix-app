import Image from 'next/image';
import CardsServices from './CardsServices';
import NavigateCustomer from './NavigateCustomer';

export default function Hero() {
  return (
    <section>
      <Image
        src="/images/Services.png"
        alt="services"
        width={1540}
        height={100}
      />
      <CardsServices />
      <NavigateCustomer />
    </section>
  );
}
