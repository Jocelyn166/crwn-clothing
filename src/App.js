import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component.jsx';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import Authentication from './routes/authentication/authentication.component';
import {GlobalStyle} from './global.styles';

 


function App() {
  return (
    <div>
    <GlobalStyle/>
    <Routes>
        <Route path = '/' element = {<Navigation/>}>
          <Route index element = {<Home/>}></Route>
          <Route path = 'shop/*' element = {<Shop/>}></Route>
          <Route path = 'auth' element = { <Authentication/>}></Route>
          <Route path = 'checkout' element = {<Checkout/>}></Route>
        </Route>
    </Routes>
    </div>
     
  );
}

export default App;
