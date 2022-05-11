import { useDeferredValue } from 'react';

export const ProductsList = ({ products }) => {
  // const deferredProducts = useDeferredValue(products);
  return (
    <div>
      {products.map((product) => {
        return <p>{product}</p>;
      })}
      {/* {deferredProducts.map((product) => {
        return <p>{product}</p>;
      })} */}
    </div>
  );
};
