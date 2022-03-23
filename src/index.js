import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserProvider } from './contexts/user.contexts';
import './index.scss';

ReactDOM.render(
  
    <BrowserRouter>
      <UserProvider>
          <App />
      </UserProvider>
       
    </BrowserRouter>,
   
  document.getElementById('root')
);

