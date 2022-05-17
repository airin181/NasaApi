import { React, useContext, useState, useEffect } from 'react'
import { landingsContext } from '../../../../context/landingsContext';
import { v4 as uuidv4 } from 'uuid';
import LandingsCard from "./LandingsCard/LandingsCard";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import usePagination from "./../../../../hooks/pagination"




const LandingsList = () => {


  const { setLanding, landing, handleRemoveLanding } = useContext(landingsContext);

  const [visible, setVisible] = useState(false); // scroll to top 
  let [page, setPage] = useState(1); // pagination

  const [landingFiltered, setLandingFiltered] = useState(landing) // filtrado por nombre
  const [searchTerm, setsearchTerm] = useState('');  // the value of the search field 




  // Coge el array con todos los landing y hace un filtrado. Comprueba si cada uno de esos elementos cumple con una condición -> si el estado searchTerm (input search de filtrado por nombre) está vacío me devuelves element (todo) y si se cumple con la otra condición me devuelves lo que coincida.

  useEffect(() => {


    let toFilter = landing.filter((element) => {
      if (searchTerm === "") {
        return element
      } else if (element.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return element
      }
    })
    setLandingFiltered(toFilter)
  }
    , [searchTerm, landing])






  //__________________________ ORDENAR LISTA ALFABÉTICAMENTE




  const handleSort = () => {
    console.log(landing);
   
    const sortedData = [...landing].sort((b, a) => {
      
      return a > b? 1 : -1
    })
    setLanding(sortedData)
  }




  //__________________________ FLECHA CON SCROLL PARA IR ARRIBA DE LA PAG

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





  //___________________________  PAGINATION




  const PER_PAGE = 12;

  const count = Math.ceil(landingFiltered.length / PER_PAGE); //redondea el num hacia arriba --> arrays entre 12
  const _DATA = usePagination(landingFiltered, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };








  // **********************************************************



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

        <section className='pag-sort'>
          <article>

            <Pagination
              count={count}
              size="medium"
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={handleChange}
              className="pagination"
            />
          </article>
          <article>

            <Button variant="outlined" className='sort-button' onClick={handleSort}>Sort A-Z</Button>
            <input type="search" onChange={event => { setsearchTerm(event.target.value) }} className="search-input" placeholder="Filter by name" />
          </article>

        </section>


        <div className='list-general'>

          <button className='scroll-button'>
            <BsFillArrowUpSquareFill onClick={scrollToTop}
              style={{ display: visible ? 'inline' : 'none' }} />
          </button>

          {(landing ?

            _DATA.currentData().map((element) => {
              return (
                <LandingsCard data={element} key={uuidv4()} first={element.first} last={element.last} className="div-general" remove={() => handleRemoveLanding(element)} /* edit={() => handleEditLanding(element)}  */ />)
            })

            : "")}

        </div>

      </div>
    </>)
};

export default LandingsList;