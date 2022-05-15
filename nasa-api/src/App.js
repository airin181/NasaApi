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






/*_____________________________________ 
  
  
  
  
 >>>>>>>>>>      LANDINGS      <<<<<<<<<<<<<



______________________________________*/





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




  // __________________




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




  // _______________________





  const createLanding = async (landingData) => {


    try {
      // eslint-disable-next-line
      const response = await axios.post(`http://localhost:5000/api/astronomy/landings/create`, landingData)
      const result = await response.data


    } catch (error) {
      throw error
    }
  }

  // eslint-disable-next-line 
  useEffect(() => { createLanding() }, []);







  // _______________________





  // REMOVE card

  const handleRemoveLanding = async (landingToDelete) =>  {
    console.log('DELETE LANDING of -->',landingToDelete);

    //se elimina del front
    const landingAfterRemove = landing.filter((item) => landingToDelete !== item);
    setLanding(landingAfterRemove)

    //se eliminan de la bbdd
    await axios.delete('http://localhost:5000/api/astronomy/landings/delete',{ data: landingToDelete})
    
  }



    // _______________________





  // EDIT card

  const handleEditLanding = async (landingToEdit) =>  {
    console.log('DELETE LANDING of -->',landingToEdit);


    
    
    await axios.put('http://localhost:5000/api/astronomy/landings/edit:id',{ data: landingToEdit})
    const landingAfterEdit = 
    setLanding(landingAfterEdit)
    
  }





/*_____________________________________ 
  
  
  
  
**********     NEAS      ***********



______________________________________*/







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





  //petición HTTP de tipo POST para crear neas
  const createNea = async (neaData) => {
    console.log('neaData en APP--->', neaData);

    try {
      const response = await axios.post(`http://localhost:5000/api/astronomy/neas/create`, neaData)
      const result = await response.data
      console.log('nea created (app)-->', result);
      setNeas(...neas, result)

    } catch (error) {
      throw error
    }
  }

  // eslint-disable-next-line 
  useEffect(() => { createNea() }, []);



 // _____________________________________




 // REMOVE card

 const handleRemoveNea = async (neaToDelete) =>  {
  console.log('DELETE NEA of -->',neaToDelete);

  //se elimina del front
  const neasAfterRemove = neas.filter((item) => neaToDelete !== item);
  setNeas(neasAfterRemove)

  //se eliminan de la bbdd
  await axios.delete('http://localhost:5000/api/astronomy/neas/delete',{ data: neaToDelete})
  
}





  const data = {
    landing,
    neas,
    setOption,
    option,
    select,
    setSelect,
    landingFilter,
    createLanding,
    createNea,
    handleRemoveLanding,
    handleRemoveNea,
    handleEditLanding
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
