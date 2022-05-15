import React from "react";
import NeasList from './NeasList/NeasList';

import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



const Neas = () => {
  return <>
     <div className='back-div'>
      <img src="https://img.icons8.com/material/30/053a92/chevron-left--v1.png" style={{ width: "23px" }} alt="back"/>
      <Button type="submit" variant="contained" component={Link} to="/" id="back">BACK</Button>
    </div>
    <div className="landings-container">
      <h1>NEAs</h1>
      <h3 style={{marginTop:0}}>(Near-Earth asteroid)</h3>
      <p id="description">Near-Earth objects (NEOs) are asteroids or comets of sizes ranging from metres to tens of kilometres that orbit the Sun and whose orbits come close to that of Earth's. Of the more than 600 000 known asteroids in our Solar System, more than 20 000 are NEOs.</p>

       <Button type="submit" variant="contained" component={Link} to="/neas/create" style={{ margin: "1em" }}>CREATE YOUR OWN NEA</Button>
   <NeasList/> 
  </div>;
  </>
};

export default Neas;
