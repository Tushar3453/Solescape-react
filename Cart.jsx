import React from "react";

import './landing.css';
function Cart() {
  return (
    <div className="cart">
      <h2>CART</h2>
      <div className="listCart">
        <div className="item">
          <img src="images/1.webp" alt="Cart Item" />
          <div className="content">
            <div className="name">CoPilot / Black / Automatic</div>
            <div className="price">$550 / 1 product</div>
          </div>
          <div className="quantity">
            <button>-</button>
            <span className="value">3</span>
            <button>+</button>
          </div>
        </div>
      </div>
      <div className="buttons">
        <div className="close">CLOSE</div>
        <div className="checkout">
          <a href="checkout.html">CHECKOUT</a>
        </div>
      </div>
    </div>
  );
}

export default Cart;
