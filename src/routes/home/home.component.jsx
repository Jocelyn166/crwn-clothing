import React from 'react';
import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import './home.styles.scss';

const Home = ()=>(
    <div className='home'>
       <Directory/>
       <Outlet/>
    </div>
);
export default Home;