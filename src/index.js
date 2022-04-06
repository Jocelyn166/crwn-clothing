import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { CategoriesProvider } from './contexts/categories.contexts';
import { UserProvider } from './contexts/user.contexts';
import { CartProvider } from './contexts/cart.contexts';

ReactDOM.render(
  
    <BrowserRouter>

      <UserProvider>

        <CategoriesProvider>
          
           <CartProvider>
              <App />
           </CartProvider>
           
        </CategoriesProvider>
          
      </UserProvider>
       
    </BrowserRouter>,
   
  document.getElementById('root')
);

