import { React, useContext, useState, useEffect } from 'react'
import { neasContext } from '../../../../context/neasContext';
import { v4 as uuidv4 } from 'uuid';
import NeasCard from "./NeasCard/NeasCard";
import Pagination from '@mui/material/Pagination';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import usePagination from "./../../../../hooks/pagination"




const NeasList = () => {

  //context:
  const { neas, handleRemoveNea /* setNeas */ } = useContext(neasContext); //info de neas 

  //estados:
  const [visible, setVisible] = useState(false); // scroll to top
  const [page, setPage] = useState(1); // pagination



  //___________________ SCROLL TO TOP

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





  //___________________ PAGINATION


  const PER_PAGE = 12;

  const count = Math.ceil(neas.length / PER_PAGE);
  const _DATA = usePagination(neas, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };






  //__________________________ ORDENAR LISTA ALFABÉTICAMENTE



  //continuar con esto más adelante. No funciona. Si se comenta setNeas no se rompe.

 /*  function handleSortDesignation() {
    const sortedData = [...neas].sort((a,b)=>{
      return a.designation > b.designation ? 1: -1
    })
    setNeas(sortedData)
  }

 */


  // ================== 

if(neas){
  return <>


    <div className='div-general-column'>

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

       {/*  <article>
          <Button variant="outlined" className='sort-button' onClick={handleSortDesignation}>Sort A-Z</Button> 
                   <input type="search"  className="search-input" placeholder="Filter by designation" />
          </article> */}

      </section>







      <div className='list-general'>

        <button className='scroll-button'>
          <BsFillArrowUpSquareFill onClick={scrollToTop}
            style={{ display: visible ? 'inline' : 'none' }} />
        </button>

        {(neas ? _DATA.currentData().map(element => <NeasCard data={element} key={uuidv4()} className="div-general" remove={() => handleRemoveNea(element)} />) : "")}

      </div>

    </div>




  </>;
}
};

export default NeasList;
