import Header from './components/Header';
import Main from './components/Main';
/* import Footer from './components/Footer'; */

import { BrowserRouter } from 'react-router-dom';
import './../src/styles/styles.scss'
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { landingsContext } from './context/landingsContext';
import { neasContext } from './context/neasContext';






const App = () => {

  const [landing, setLanding] = useState([]); // estado de array de landings
  const [landingFilter, setLandingFilter] = useState("")    //estado para cuando se hacen uso de los filtros

  const [neas, setNeas] = useState([]); // estado de array de neas

  const [select, setSelect] = useState(""); //mass or class
  const [option, setOption] = useState(""); //data introducida por input */



  // _____________________________________




  //petición HTTP GET SIN filtros. Trae todos.
  const getLandings = async () => {

    try {
      const response = await axios.get('http://localhost:5000/api/astronomy/landings/all')
      const result = await response.data/* .slice(0, 50) */
      setLanding(result)

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
      const result = await response.data
      setLandingFilter(result)

    } catch (error) {
      throw error
    }
  }
  // eslint-disable-next-line
  useEffect(() => { getLandingsByClassOrMass() }, [select, option])




  // _____________________________________




  //petición HTTP de tipo POST para crear landings
  const createLanding = async (landingData) => { //fetch para filtrar por clase
    //example coordenadas (cork):  51.89797, -8.47061

    try {
      const response = await axios.post(`http://localhost:5000/api/astronomy/landings/create`, landingData)

      const result = await response.data

    } catch (error) {
      throw error
    }
  }


  useEffect(() => { createLanding() }, []);
  // empty dependency array means this effect will only run once (like componentDidMount in classes)






  // _____________________________________





  //petición HTTP GET SIN filtros. Trae todos.
  const getNeas = async () => {

    try {
      const response = await axios.get('http://localhost:5000/api/astronomy/neas/all')
      const result = await response.data/* .slice(0, 50) */
      setNeas(result)

    } catch (error) {
      throw error
    }
  }
  useEffect(() => { getNeas() }, [])




  // _____________________________________



  const data = {
    landing,
    neas,
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
        <neasContext.Provider value={data}>
        <landingsContext.Provider value={data}>
          <Main style={{ display: "flex" }} />
        </landingsContext.Provider>
        </neasContext.Provider>
      </BrowserRouter>
      {/*  <Footer /> */}

    </div>
  );
}

export default App;
