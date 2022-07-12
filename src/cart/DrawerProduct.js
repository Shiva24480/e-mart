import React from 'react'
import { useStateValue } from '../StateProvider';
import './DrawerProduct.css';

function DrawerProduct({ iseven, title, rating, id, image, price }) {
    const [{ basket, totalPrice }, dispatch] = useStateValue();

    const removeFromWishList = () => {
        dispatch({
            type: "REMOVE_FROM_WISHLIST",
            id: id,
        });
    }

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        });

        removeFromWishList();
    };

    const setAddPriceState = () => {
        let newPrice = totalPrice + price;
        dispatch({
            type: "SET_PRICE",
            price: newPrice
        })
    }

    const handleAddCart = () => {
        setAddPriceState();
        addToBasket();
    }

    function truncate(string, n) {
        if (string.length > n) {
            return string.substr(0, n - 1) + "...";
        }
        return string;
    }

    return (
        <div className={`dp`}>
            <img src={image} alt="" />
            <div className="dp-info">
                <p className='dp-title'>{truncate(title, 50)}</p>
                <div className="dp-price">
                    <p>$</p>
                    <p>{price}</p>
                </div>
                <div className='dp-button-conatiner'>
                    <button onClick={removeFromWishList} className='dp-button'>Remove</button>
                    <button onClick={handleAddCart} className='dp-button'>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default DrawerProduct