import React,{useState,useEffect} from 'react'
import './Slider.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    useEffect(() => {
        const lastIndex = slides.length-1;
        if(current < 0){
            setCurrent(lastIndex);
        }
        if(current > lastIndex){
            setCurrent(0)
        }
    },[current]);
  
    useEffect(() => {
        const slider = setInterval(() => {
            setCurrent(current+1)
        },5000);

        return () => {
            clearInterval(slider);
        }
    },[current]);
  
    return (
      <section className='slider'>
        <ArrowBackIosIcon className='left-arrow' onClick={() => setCurrent(current-1)} />
        <ArrowForwardIosIcon className='right-arrow' onClick={() => setCurrent(current+1)} />
        {slides.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}
            >
              {index === current && (
                <img src={slide} alt='travel image' className='image' />
              )}
            </div>
          );
        })}
      </section>
    );
  };

export default Slider
