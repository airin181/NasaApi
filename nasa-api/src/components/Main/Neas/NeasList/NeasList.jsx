import { React, useContext, useState } from 'react'
import { neasContext } from '../../../../context/neasContext';
import { v4 as uuidv4 } from 'uuid';
import NeasCard from "./NeasCard/NeasCard";
/* import { Link } from "react-router-dom";
import Button from '@mui/material/Button'; */
import Pagination from '@mui/material/Pagination';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import usePagination from "./../../../../hooks/pagination"

const NeasList = () => {

  
  const { neas } = useContext(neasContext); //info de neas 
  const [visible, setVisible] = useState(false); // scroll to top
  let [page, setPage] = useState(1); // pagination
  
  console.log(neas);



  //___________________ scroll to top - arrow

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





  //___________________ pagination


  const PER_PAGE = 12;

  const count = Math.ceil(neas.length / PER_PAGE);
  const _DATA = usePagination(neas, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };







  return <>



<div className='div-general-column'>

{/* <section className='text-landingsList'>
  <h1>List of all Neas on Earth</h1>
  <p>This list of potential mission targets, provided by NHATS, should not be interpreted as a complete list of viable NEAs for an actual human exploration mission. As the NEA orbits are updated, <b>the viable mission targets and their mission parameters will change</b>. To select an actual target and mission scenario, additional constraints must be applied <u>including astronaut health and safety considerations, human space flight architecture elements, their performances and readiness, the physical nature of the target NEA and mission schedule constraints</u>.</p>
</section> */}

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

  {(neas ? _DATA.currentData().map(element => <NeasCard data={element} key={uuidv4()} className="div-general" />) : "not working this time")}
  
</div>

</div>




  </>;
};

export default NeasList;
