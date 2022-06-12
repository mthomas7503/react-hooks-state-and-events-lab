import React, { useState } from "react";

function Item({ name, category }) {
  
  const[inCart, setCart] = useState({
    className: "",
    buttonText: "Add to Cart",
  })

  function updateCart() {
    if(inCart.buttonText === "Add to Cart")
    {setCart({className: "in-cart", buttonText: "Remove From Cart"})}

    else if(inCart.buttonText === "Remove From Cart"){
      setCart({className: "", buttonText: "Add to Cart"})
    }

  }

  return (
    <li className={inCart.className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={updateCart}>{inCart.buttonText}</button>
    </li>
  );
}

export default Item;
