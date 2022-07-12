import React from 'react'
import { useStateValue } from './StateProvider';
import './Subtotal.css'
import { Link } from "react-router-dom";

function Subtotal() {
  const [{ basket, totalPrice }] = useStateValue();

  return (
    <div className='subtotal'>
      <div className="subtotal-subtotal">
        <p>Subtotal:</p>
        {/* ({basket.length} items) */}
        <span style={{ fontSize: "1rem" }}>$</span>
        <span style={{ fontSize: "1.8rem", padding: '0rem 0rem 0.3rem 0.3rem' }}>
          {/* {basket?.reduce((a, b) => a + b.price, 0).toFixed(2)} */}
          {totalPrice}
        </span>
      </div>
      {basket.length > 0 ? (<Link to='/purchase'>
        <button>CHECKOUT</button>
      </Link>) : (<button className='st-notusable'>CHECKOUT</button>)}

    </div>
  )
}

export default Subtotal;