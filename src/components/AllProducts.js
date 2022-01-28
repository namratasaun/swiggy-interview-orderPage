import { useEffect, useRef, useState } from 'react';
import ProductCard from './ProductCard';
import SearchProduct from './SearchProduct';

const AllProducts = () => {
  const [productData, setProductData] = useState([]);
  const allData = useRef({});

  useEffect(() => {
    fetch('https://run.mocky.io/v3/128675fd-afe3-43fd-9b9a-cf7a0ee511ef')
      .then((response) => response.json())
      .then((data) => {
        allData.current = data;
        setProductData(data);
      });
  }, []);

  return (
    <div className='App'>
      <SearchProduct allData={allData} setProductData={setProductData} />
      {productData.map((singleProduct) => (
        <ProductCard key={singleProduct.id} data={singleProduct} />
      ))}
    </div>
  );
};

export default AllProducts;
