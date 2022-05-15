import { React, useContext, useState } from 'react'
import { landingsContext } from '../../../../context/landingsContext';
import { v4 as uuidv4 } from 'uuid';
import LandingsCard from "./LandingsCard/LandingsCard";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import usePagination from "./../../../../hooks/pagination"





const LandingsList = () => {


  const { landing } = useContext(landingsContext);
  const [visible, setVisible] = useState(false); // scroll to top
  let [page, setPage] = useState(1); // pagination

  //flecha to top visible o no
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
    });
  };

  window.addEventListener('scroll', toggleVisible);




  const PER_PAGE = 12;

  const count = Math.ceil(landing.length / PER_PAGE);
  const _DATA = usePagination(landing, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };


  return (
    <>
      <div className='back-div'>
        <img src="https://img.icons8.com/material/30/053a92/chevron-left--v1.png" style={{ width: "23px" }} alt="back" />
        <Button type="submit" variant="contained" component={Link} to="/landings/" id="back">BACK</Button>
      </div>

      <div className='div-general-column'>

        <section className='text-landingsList'>
          <h1>List of all landings on Earth</h1>
          <p>The following is a <b>collection</b> of lists of asteroids of the Solar System that are exceptional in some way, such as their size or orbit. For the purposes of this article, "asteroid" refers to minor planets out to the orbit of Neptune, and includes the dwarf planet 1 Ceres, the Jupiter trojans and the centaurs, but not trans-Neptunian objects (objects in the Kuiper belt, scattered disc or inner Oort cloud). For a complete list of minor planets in numerical order, see List of minor planets.</p>
        </section>

        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          className="pagination"
        />

        <div className='list-general'>

          <button className='scroll-button'>
            <BsFillArrowUpSquareFill onClick={scrollToTop}
              style={{ display: visible ? 'inline' : 'none' }} />
          </button>

          {(landing ? _DATA.currentData().map(element => <LandingsCard data={element} key={uuidv4()} className="div-general" />) : "not working this time")}

        </div>

      </div>
    </>)
};

export default LandingsList;