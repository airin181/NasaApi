
import React, { useEffect, useState } from "react";
import axios from 'axios';
import LandingsForm from './LandingsForm/LandingsForm';
import LandingsList from './LandingsList/LandingsList';
import Map from './Map/Map';
import { landingsContext } from './../../../context/landingsContext';


const Landings = () => {

  const [landing, setLanding] = useState([]);
  const [landingFilter, setLandingFilter] = useState("")    //estado para cuando se hacen uso de los filtros


  const [select, setSelect] = useState(""); //mass or class
  const [option, setOption] = useState(""); //data introducida por input */

  //>>>>>>>>>>____________________hacer aquí AXIOS y repartir info a Map y List


  //petición HTTP SIN filtros. Trae todos.
  const getLandings = async () => {

    try {
      const response = await axios.get('http://localhost:5000/api/astronomy/landings/all')
      const result = await response.data.slice(0, 50)
      setLanding(result)
      console.log('c.log de todos los landings', result);
      
    } catch (error) {
      throw error
    }
  }
  useEffect(() => { getLandings() }, [])



  //petición HTTP con filtros
  const getLandingsByClassOrMass = async () => { //fetch para filtrar por clase

    try {
      const response = await axios.get(`http://localhost:5000/api/astronomy/landings/${select}/${option}`)
      console.log('clog de response en MAP',response);
      //http://localhost:5000/api/astronomy/landings/mass/2000
      const result = await response.data
      console.log('c.log de result de getLandingsByClassOrMas ANDINGS',result);

      setLandingFilter(result)
      
    } catch (error) {
      throw error
    }
  }
  useEffect(() => { getLandingsByClassOrMass() }, [select,option]) 

  
  
  const createLanding = (input) => {
    /* setPokemon([...pokemon, input]) */
    console.log('llega el dato del landing creado en el form a Landings: ',input);
  }



  const data = {
    landing,
    setOption,
    option,
    select,
    setSelect,
    landingFilter,
    createLanding 
  }

  return <div className="landings-container">
    <h1>Landings</h1>
    <h3 id="description">Shooting stars, or meteors, are bits of interplanetary material falling through Earth's atmosphere and heated to incandescence by friction. These objects are called meteoroids as they are hurtling through space, becoming meteors for the few seconds they streak across the sky and create glowing trails.</h3>
    <landingsContext.Provider value={data}>
      <Map/>
      <LandingsForm />
      <LandingsList />
    </landingsContext.Provider>
  </div>;
};

export default Landings;
