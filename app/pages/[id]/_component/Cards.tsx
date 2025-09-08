import { DataProduct, Product } from '../../../_lib/dataProduct';
import CardPage from './CardPage';

export default function Cards() {
  return (
    <div>
      {DataProduct.map((item: Product, index) => (
        <CardPage key={index} titles={item.title} desc={item.desc} />
      ))}
    </div>
  );
}
