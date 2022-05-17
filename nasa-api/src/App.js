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

  const [requestAfterEdit, setRequestAfterEdit] = useState(false) // landings edition
  const [requestNeaAfterEdit, setRequestNeaAfterEdit] = useState(false) // neas edition






  /*_____________________________________ 
    
    
    
    
   >>>>>>>>>>      LANDINGS      <<<<<<<<<<<<<
  
  
  
  ______________________________________*/





  //petición HTTP GET SIN filtros. Trae todos.
  const getLandings = async () => {

    try {
      const response = await axios.get('http://localhost:5000/api/astronomy/landings/all')
      const result = await response.data
      setLanding(result)

    } catch (error) {
      throw error
    }
  }
  useEffect(() => { getLandings() }, [])

  useEffect(() => { getLandings() }, [requestAfterEdit])




  // __________________




  //petición HTTP GET con filtros

  const getLandingsByClassOrMass = async () => { //fetch para filtrar por clase

    try {
      const response = await axios.get(`http://localhost:5000/api/astronomy/landings/${select}/${option}`)
      const result = await response.data
      console.log("result de class option y etc", result);
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

  const handleRemoveLanding = async (landingToDelete) => {
    console.log('DELETE LANDING of -->', landingToDelete);

    //se elimina del front
    const landingAfterRemove = landing.filter((item) => landingToDelete !== item);
    setLanding(landingAfterRemove)

    //se eliminan de la bbdd
    await axios.delete('http://localhost:5000/api/astronomy/landings/delete', { data: landingToDelete })

  }



  // _______________________





  // EDIT card landing

  const handleEditLanding = async (landingToEdit) => {

    const newID = landingToEdit.id ? landingToEdit.id : landing.id
    const newName = landingToEdit.name ? landingToEdit.name : landing.name
    const newMass = landingToEdit.mass ? landingToEdit.mass : landing.mass
    const newRecclass = landingToEdit.recclass ? landingToEdit.recclass : landing.recclass
    const newYear = landingToEdit.year ? landingToEdit.year : landing.year

    const newReclat = landingToEdit.reclat ? landingToEdit.reclat : landing.reclat
    const newReclong = landingToEdit.reclong ? landingToEdit.reclong : landing.reclong


    const landingUpdated = {
      id: newID,
      name: newName,
      mass: newMass,
      recclass: newRecclass,
      year: newYear,
      reclat: newReclat,
      reclong: newReclong,
      geolocation: {
        latitude: newReclat,
        longitude: newReclong
      }
    }

    try {

      const response = await axios.put('http://localhost:5000/api/astronomy/landings/edit/:id', landingUpdated)
      const landingAfterEdit = response.data

      setRequestAfterEdit(!requestAfterEdit)
      setLanding(landing)

    } catch (error) {
      throw error
    }

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
  useEffect(() => { getNeas() }, [requestNeaAfterEdit])



  // _____________________________________





  //petición HTTP de tipo POST para crear neas
  const createNea = async (neaData) => {

    try {
      const response = await axios.post(`http://localhost:5000/api/astronomy/neas/create`, neaData)
      const result = await response.data

    } catch (error) {
      throw error
    }
  }

  // eslint-disable-next-line 
  useEffect(() => { createNea() }, []);



  // _____________________________________




  // REMOVE card

  const handleRemoveNea = async (neaToDelete) => {
    console.log('DELETE NEA of -->', neaToDelete);

    //se elimina del front
    const neasAfterRemove = neas.filter((item) => neaToDelete !== item);
    setNeas(neasAfterRemove)

    //se eliminan de la bbdd
    await axios.delete('http://localhost:5000/api/astronomy/neas/delete', { data: neaToDelete })

  }




  // __________________________________






  // EDIT card nea

  const handleEditNea = async (neaToEdit) => {

    console.log('EDIT NEA of -->', neaToEdit);

    const newDesignation = neaToEdit.designation ? neaToEdit.designation : neas.designation
    const newDiscovery_date = neaToEdit.discovery_date ? neaToEdit.discovery_date : neas.discovery_date
    const newH_mag = neaToEdit.h_mag ? neaToEdit.h_mag : neas.h_mag
    const newI_deg = neaToEdit.i_deg ? neaToEdit.i_deg : neas.i_deg
    const newMoid_au = neaToEdit.moid_au ? neaToEdit.moid_au : neas.moid_au
    const newOrbit_class = neaToEdit.orbit_class ? neaToEdit.orbit_class : neas.orbit_class
    const newPeriod_yr = neaToEdit.period_yr ? neaToEdit.period_yr : neas.period_yr
    const newPha = neaToEdit.pha ? neaToEdit.pha : neas.pha
    const newQ_au_1 = neaToEdit.q_au_1 ? neaToEdit.q_au_1 : neas.q_au_1
    const newQ_au_2 = neaToEdit.q_au_2 ? neaToEdit.q_au_2 : neas.q_au_2


    const neaUpdated = {
      designation: newDesignation,
      discovery_date: newDiscovery_date,
      h_mag: newH_mag,
      i_deg: newI_deg,
      moid_au: newMoid_au,
      orbit_class: newOrbit_class,
      period_yr: newPeriod_yr,
      pha: newPha,
      q_au_1: newQ_au_1,
      q_au_2: newQ_au_2,
    }

    console.log('neaUpdated en app-->', neaUpdated.designation);

    try {
      const res = await axios.put('http://localhost:5000/api/astronomy/neas/edit/:designation', neaUpdated)
      const neaAfterEdit = res.data

      setRequestNeaAfterEdit(!requestNeaAfterEdit)
      setNeas(neas)

    } catch (error) {
      throw error
    }

  }






  const data = {
    setLanding,
    landing,
    neas,
    setNeas,
    setOption,
    option,
    select,
    setSelect,
    landingFilter,
    createLanding,
    createNea,
    handleRemoveLanding,
    handleRemoveNea,
    handleEditLanding,
    handleEditNea
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
