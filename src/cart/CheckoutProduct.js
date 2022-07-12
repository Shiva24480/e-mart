import React, { useState } from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from '../StateProvider'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useEffect } from 'react';

function CheckoutProduct({ iseven, id, title, image, price, rating }) {
    const [{ basket, totalPrice }, dispatch] = useStateValue();
    const [quantity, setQuantity] = useState(1);

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
        let newPrice = totalPrice - (price*quantity);
        dispatch({
            type: "SET_PRICE",
            price: newPrice
        });
    }

    // const setRemovePriceState = () => {
    //     let newPrice = totalPrice - price;
    //     dispatch({
    //         type: "SET_PRICE",
    //         price: newPrice
    //     })
    // }
    const handleRemoveClick = () => {
        setRemovePriceState();
        removeFromBasket();
    }

    const setAddPriceState = () => {
        let newPrice = totalPrice + price;
        dispatch({
            type: "SET_PRICE",
            price: newPrice
        })
    }
    const setRemovePriceState = () => {
        let newPrice = totalPrice - price;
        dispatch({
            type: "SET_PRICE",
            price: newPrice
        });
    }

    const addQuantity = () => {
        setQuantity(quantity + 1);
        if(quantity<10){
            setAddPriceState();
        }
    }

    const removeQuantity = () => {
        setQuantity(quantity - 1);
        if(quantity>1){
            setRemovePriceState();
        }
    }

    useEffect(() => {
        if (quantity < 1) {
            setQuantity(1);
        } else if (quantity > 10) {
            setQuantity(10);
        }
    }, [quantity])

    return (
        <div className={`checkoutproduct ${iseven ? 'even' : 'odd'}`} >
            <img src={image} className="checkoutproduct-img" />

            <div className="checkoutproduct-info">
                <div className='checkoutproduct-title'>
                    <p className='cp-info'>{title}</p>
                    <p className='price'>price:${price}</p>
                </div>
                <div className='checkoutproduct-rating'>
                    {Array(rating).fill().map(tx => (
                        <p>🌟</p>
                    ))}
                </div>


                <div className='cp-buttons'>
                    <button onClick={handleRemoveClick} >Remove form Cart</button>
                    <div className="quantity-slecter">
                        {`Quantity: `}
                        <RemoveIcon onClick={removeQuantity} className='quantity-remove' />
                        {quantity}
                        <AddIcon onClick={addQuantity} className='quantity-add' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct