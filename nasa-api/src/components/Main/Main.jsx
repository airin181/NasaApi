import React from "react";
import Home from './Home/Home';
import Neas from './Neas/Neas';
import Footer from './Footer/Footer';
import Landings from './Landings/Landings';
import { Route, Routes } from 'react-router-dom';

const Main = () => {
  return <div className='main'>
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Neas />} path='/neas' />
      <Route element={<Landings />} path='/landings' />

      {/*          <Route element={<NeasList/>} path='/landings/list'/>
        <Route element={<LandingsList/>} path='/neas/list'/>  */}

    </Routes>
   {/*  <Footer /> */}
    
  </div>;
};

export default Main;
