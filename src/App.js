import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component.jsx';
import Shop from './routes/shop/shop.component';
import Authentication from './routes/authentication/authentication.component';
import './App.css';

 


function App() {
  return (
    <Routes>
        <Route path = '/' element = {<Navigation/>}>
          <Route index element = {<Home/>}></Route>
          <Route path = 'shop' element = {<Shop/>}></Route>
          <Route path = 'auth' element = { <Authentication/>}></Route>
        </Route>
     

    </Routes>
    
     
  );
}

export default App;
