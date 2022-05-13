import { React, useContext } from 'react'
import { landingsContext } from '../../../../context/landingsContext';
import { v4 as uuidv4 } from 'uuid';
import LandingsCard from "./LandingsCard/LandingsCard";

const LandingsList = () => {


   const { landing } = useContext(landingsContext); 

  return (<div>
    <p>ESTO ES LANDING LIST  </p>

    {(landing? landing.map(element => <LandingsCard data={element} key={uuidv4()}/>): "no furula")}

  </div>)
};

export default LandingsList;
