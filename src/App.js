import logo from './logo.svg';
import './App.css';
import { useState, useTransition } from 'react';
import { generateProducts } from './data';
import { ProductsList } from './ProductsList';

const dummyProducts = generateProducts();

const filterProductsFunc = (term) => {
  if (!term) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(term));
};

function App() {
  const [term, setTerm] = useState('');
  const [isPending, startTransition] = useTransition();

  const filterProducts = filterProductsFunc(term);

  const handleTextChange = (event) => {
    startTransition(() => {
      setTerm(event.target.value);
    });
  };

  return (
    <div className="App">
      <input value={term} onChange={handleTextChange} />
      {isPending && <p>Update List...</p>}
      <ProductsList products={filterProducts} />
    </div>
  );
}

export default App;
