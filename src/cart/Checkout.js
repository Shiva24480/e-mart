import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../StateProvider'
import Subtotal from '../Subtotal'
import { Link } from "react-router-dom";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  const removeAllFromBasket = () => {
    dispatch({
      type: "REMOVE_ALL",
    });
  }


  let cartDiv;
  if (basket.length === 0) {
    cartDiv = (<>
      <p>Cart is Empty</p>
      <Link to="/">
        <span>Click here to add items</span>
      </Link>
    </>);
  } else {
    cartDiv = (<>
      <p>Shopping Cart</p>
      <span onClick={removeAllFromBasket} className='checkout-cartremoval'>Remove all items</span>
    </>)
  }
  
  return (
    <div className='checkout'>
      <div className='checkout-left'>
        <div className='checkout-title'>
          {cartDiv}
        </div>
        <div className="checkout-product-list">
          {basket.map((item, index) => (
            <CheckoutProduct
              iseven={index%2==0? true:false}
              id={item.id}
              title={item.title}
              rating={item.rating}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <Subtotal className='st'/>
    </div>
  )
}


export default Checkout