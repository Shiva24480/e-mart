import React from 'react'
import './BackToTop.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function BackToTop() {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className='top'>
      <button onClick={handleClick}>
        Back To Top
        <ArrowUpwardIcon style={{marginLeft:'1rem'}}/>
      </button>
    </div> 
  )
}


export default BackToTop