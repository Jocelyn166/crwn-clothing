import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { ProductsProvider } from './contexts/products.contexts';
import { UserProvider } from './contexts/user.contexts';
import { CartProvider } from './contexts/cart.contexts';
import './index.scss';

ReactDOM.render(
  
    <BrowserRouter>

      <UserProvider>

        <ProductsProvider>
          
           <CartProvider>
              <App />
           </CartProvider>
           
        </ProductsProvider>
          
      </UserProvider>
       
    </BrowserRouter>,
   
  document.getElementById('root')
);

