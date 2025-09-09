import { feature, Feature } from '@/_lib/feature';
import CardHome from './CardHome';

export default function WorkWirhUsCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {feature.map((feature: Feature, index: number) => (
        <CardHome
          key={index}
          img={feature.image}
          content={feature.content}
          icon={feature.icon}
          title={feature.title}
        />
      ))}
    </div>
  );
}
