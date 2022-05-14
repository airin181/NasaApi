import React from "react";
import Map from './Map/Map';

import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import LandingsForm from "./LandingsForm/LandingsForm";



const Landings = () => {


  return (<>
    <div className='back-div'>
      <img src="https://img.icons8.com/material/30/053a92/chevron-left--v1.png" style={{ width: "23px" }} />
      <Button type="submit" variant="contained" component={Link} to="/" id="back">BACK</Button>
    </div>
    <div className="landings-container">
      <h1>Landings</h1>
      <p id="description">Shooting stars, or meteors, are bits of interplanetary material falling through Earth's atmosphere and heated to incandescence by friction. These objects are called meteoroids as they are hurtling through space, becoming meteors for the few seconds they streak across the sky and create glowing trails.</p>

      <Button type="submit" variant="contained" component={Link} to="/landings/list" style={{ margin: "1em" }}>CHECK ALL LANDINGS HERE</Button>
      <Map />
      <LandingsForm />

    </div>
  </>);
};

export default Landings;
