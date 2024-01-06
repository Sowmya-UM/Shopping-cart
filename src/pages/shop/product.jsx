import React, { useContext } from 'react'
import { ShopContext } from "../../context/shop-context"; 

export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id];
  return (
    <div className ="product" id = "product1">
        <img src={productImage}  />
        <div className  ="description" id="description">
            <p>
                <b>{productName}</b>
            </p>
            <p> ${price}</p>    
        </div>
        <button className ="addToCartBttn" id="addToCartBttn" onClick={() => addToCart(id)}> 
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </button>
    </div>
  )
};
