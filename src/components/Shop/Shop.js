
import fakeData from '../../fakeData';
import React, { useState } from 'react';
import './Shop.css'
import Product from '../Products/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
     const first10 = fakeData.slice(0,10);
     const [products, setProducts] = useState(first10);

     const [cart,setCart] = useState([]);



     const handlAddProduct = (product) =>{
            const newCart = [...cart,product];
      setCart(newCart);
     } 





      return (
            <div className='shop-container'>
                  <div className="product-container">
                  
                              {
                                    products.map(pd => <Product
                                          handlAddProduct = {handlAddProduct}
                                          product={pd}></Product>)
                              }
                  
                  </div>
                  <div className="card-container">
                        <Cart cart={cart}></Cart>


                  </div>
                  
            </div>
      );
};

export default Shop;