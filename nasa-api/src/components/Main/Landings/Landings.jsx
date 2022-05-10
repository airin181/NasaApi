
import React, { useEffect, useState } from "react";
import axios from 'axios';
import LandingsForm from './LandingsForm/LandingsForm';
import LandingsList from './LandingsList/LandingsList';
import Map from './Map/Map';
import { landingsContext } from './../../../context/landingsContext';


const Landings = () => {

  const [landing, setLanding] = useState([]);

  //>>>>>>>>>>____________________hacer aquí AXIOS y repartir info a Map y List

  const getLandings = async () => {

    try {
      const response = await axios.get('http://localhost:5000/api/astronomy/landings/all')
      const result = await response.data.slice(0, 20)
      console.log('clog de result en landigs', result);
      setLanding(result)
      
    } catch (error) {
      throw error
    }
  }
  useEffect(() => { getLandings() }, [])
  console.log('clog de landing en landigs', landing);


  const data = {
    landing
  }

  return <div className="landings-container">
    <h1>Landings</h1>
    <h3 id="description">Shooting stars, or meteors, are bits of interplanetary material falling through Earth's atmosphere and heated to incandescence by friction. These objects are called meteoroids as they are hurtling through space, becoming meteors for the few seconds they streak across the sky and create glowing trails.</h3>
    <landingsContext.Provider value={data}>
      <Map />
      <LandingsForm />
      <LandingsList />
    </landingsContext.Provider>
  </div>;
};

export default Landings;
