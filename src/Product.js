import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product({ id, title, image, price, rating }) {
  const [{ basket, totalPrice, wishList }, dispatch] = useStateValue();

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
    toast.success("Item Added to Cart", toastStyle);
  };
  const removeFromWishList = () => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      id: id,
    });
  }

  const addToWishList = () => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    });
    toast.success("Item Added to WishList", toastStyle);
  }
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
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
    })
  }

  const handleRemoveClick = () => {
    setRemovePriceState();
    removeFromBasket();
  }

  const handleAddClick = () => {
    setAddPriceState();
    addToBasket();
  }

  const toastStyle = {
    position: "bottom-right",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark"
  }
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map(tx => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <div className="product-button">
        {
          basket.find(to => to.id === id) ?
            // (<button onClick={removeFromBasket} >Remove form Cart</button>) :
            // (<button onClick={addToBasket}>Add to Cart</button>)
            (<button onClick={handleRemoveClick} >Remove form Cart</button>) :
            (<button onClick={handleAddClick}>Add to Cart</button>)
        }
        {/* <button onClick={() => { addToBasket() }}>Add to Cart</button> */}
        {
          wishList.find(to => to.id === id) ?
            (<button onClick={removeFromWishList}>Remove from WishList</button>) :
            (<button onClick={() => { addToWishList() }}>Add to WishList</button>)
        }
        {/* <button onClick={() => { addToWishList() }}>Add to WishList</button> */}
      </div>
    </div>
  );
}

export default Product;