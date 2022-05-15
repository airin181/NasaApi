import React from "react";
import Home from './Home/Home';
import Neas from './Neas/Neas';
import LandingsList from './Landings/LandingsList/LandingsList';
import NeasForm from './Neas/NeasForm/NeasForm';

import Landings from './Landings/Landings';
import { Route, Routes } from 'react-router-dom';

const Main = () => {
  return <div className='main'>
    <Routes>
      <Route element={<Home />} path='/' />
      <Route element={<Neas />} path='/neas' />
      <Route element={<Landings />} path='/landings' />
      <Route element={<Landings />} path='/landings/create' />
      <Route element={<LandingsList />} path='/landings/list' />
      <Route element={<NeasForm/>} path='/neas/create'/> 

    </Routes>


  </div>;
};

export default Main;
