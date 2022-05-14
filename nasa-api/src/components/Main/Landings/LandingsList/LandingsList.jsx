import { React, useContext, useState } from 'react'
import { landingsContext } from '../../../../context/landingsContext';
import { v4 as uuidv4 } from 'uuid';
import LandingsCard from "./LandingsCard/LandingsCard";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import { BsFillArrowUpSquareFill } from 'react-icons/bs';





const LandingsList = () => {


  const { landing } = useContext(landingsContext);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);


  return (
    <>
      <div className='back-div'>
        <img src="https://img.icons8.com/material/30/053a92/chevron-left--v1.png" style={{ width: "23px" }} />
        <Button type="submit" variant="contained" component={Link} to="/landings/" id="back">BACK</Button>
      </div>

      <div className='list-general'>
        <h1>List of all landings on Earth</h1>
        <p>The following is a <b>collection</b> of lists of asteroids of the Solar System that are exceptional in some way, such as their size or orbit. For the purposes of this article, "asteroid" refers to minor planets out to the orbit of Neptune, and includes the dwarf planet 1 Ceres, the Jupiter trojans and the centaurs, but not trans-Neptunian objects (objects in the Kuiper belt, scattered disc or inner Oort cloud). For a complete list of minor planets in numerical order, see List of minor planets.</p>

        <button className='scroll-button'>
          <BsFillArrowUpSquareFill onClick={scrollToTop}
            style={{ display: visible ? 'inline' : 'none' }} />
        </button>
        {(landing ? landing.map(element => <LandingsCard data={element} key={uuidv4()} className="div-general" />) : "not working this time")}

      </div>
    </>)
};

export default LandingsList;
