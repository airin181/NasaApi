import Header from './components/Header';
import Main from './components/Main';

import { BrowserRouter } from 'react-router-dom';
import './../src/styles/styles.scss'
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { landingsContext } from './context/landingsContext';





const App = () => {

  const [landing, setLanding] = useState([]); // estado de array de landings
  const [landingFilter, setLandingFilter] = useState("")    //estado para cuando se hacen uso de los filtros


  const [select, setSelect] = useState(""); //mass or class
  const [option, setOption] = useState(""); //data introducida por input */




  // _____________________________________




  //petición HTTP GET SIN filtros. Trae todos.
  const getLandings = async () => {

    try {
      const response = await axios.get('http://localhost:5000/api/astronomy/landings/all')
      const result = await response.data/* .slice(0, 50) */
      setLanding(result)
      console.log('c.log de todos los landings', result);

    } catch (error) {
      throw error
    }
  }
  useEffect(() => { getLandings() }, [])




  // _____________________________________




  //petición HTTP GET con filtros
  const getLandingsByClassOrMass = async () => { //fetch para filtrar por clase

    try {
      const response = await axios.get(`http://localhost:5000/api/astronomy/landings/${select}/${option}`)
      console.log('clog de response en MAP', response);
      //http://localhost:5000/api/astronomy/landings/mass/2000
      const result = await response.data
      console.log('c.log de result de getLandingsByClassOrMas ANDINGS', result);

      setLandingFilter(result)

    } catch (error) {
      throw error
    }
  }
  useEffect(() => { getLandingsByClassOrMass() }, [select, option])




  // _____________________________________




  //petición HTTP de tipo POST para crear landings
  const createLanding = async (landingData) => { //fetch para filtrar por clase
    console.log('c.log de landingData', landingData);
    //example coordenadas (cork):  51.89797, -8.47061

    try {
      const response = await axios.post(`http://localhost:5000/api/astronomy/landings/create`, landingData)

      const result = await response.data
      console.log('c.log en Landings de RESULT', result);

    } catch (error) {
      throw error
    }
  }


  useEffect(() => { createLanding() }, []);
  // empty dependency array means this effect will only run once (like componentDidMount in classes)






  // _____________________________________






  const data = {
    landing,
    setOption,
    option,
    select,
    setSelect,
    landingFilter,
    createLanding
  }





  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <landingsContext.Provider value={data}>
          <Main />
        </landingsContext.Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
