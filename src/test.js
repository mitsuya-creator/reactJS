import React from "react";
import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }
  function handleDecrease(productS){
      let nextProduct = products.map(product => {
        if(product.id === productS.id){
          return {...product, count: product.count - 1};
        }else{
          return product;
        }
      });
      nextProduct = nextProduct.filter(product => product.count > 0);
      setProducts(nextProduct);
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={() => handleDecrease(product)}>
            –
          </button>
        </li>
      ))}
      {console.log(products)}
    </ul>
  );
}
