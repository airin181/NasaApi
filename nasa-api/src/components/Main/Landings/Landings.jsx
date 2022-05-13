import React from "react";
import Map from './Map/Map';

import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import LandingsForm from "./LandingsForm/LandingsForm";



const Landings = () => {


  return <div className="landings-container">
    <h1>Landings</h1>
    <h3 id="description">Shooting stars, or meteors, are bits of interplanetary material falling through Earth's atmosphere and heated to incandescence by friction. These objects are called meteoroids as they are hurtling through space, becoming meteors for the few seconds they streak across the sky and create glowing trails.</h3>

    <Button type="submit" variant="outlined" component={Link} to="/landings/list">CHECK ALL LANDINGS HERE</Button>
    <Map />
    <LandingsForm />

  </div>;
};

export default Landings;
