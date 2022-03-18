import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import './App.css';
import Home from './routes/home/home.component.jsx';
import SignIn from './routes/sign-in/sign-in.component';


 

const Shop = () =>{
  return <h1>I am the shop page</h1>;
};

function App() {
  return (
    <Routes>
        <Route path = '/' element = {<Navigation/>}>
          <Route index element = {<Home/>}></Route>
          <Route path = 'shop' element = {<Shop/>}></Route>
          <Route path = 'sign-in' element = { <SignIn/>}></Route>
        </Route>
     

    </Routes>
    
     
  );
}

export default App;
