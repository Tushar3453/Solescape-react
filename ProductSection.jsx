import React from "react";

import './landing.css';
import p5 from '../assets/assets/p5.png'
import p3 from '../assets/assets/p3.png'
import p6 from '../assets/assets/p6.png'
import p1 from '../assets/assets/p1.png'
import p7 from '../assets/assets/p7.png'
import p2 from '../assets/assets/p2.png'

function ProductSection() {
  return (
    <section className="section__container product__container" id="product">
      <h2 className="section__header">Products</h2>
      <div className="product__grid">
        {/* Repeat for each product */}
        <ProductCard name="RAIN CLOUD" price="₹17,999.00"><img src={p5}/></ProductCard> 
        <ProductCard name="Jumpman MVP" price="₹15,295.00"> <img src={p3}/></ProductCard> 
        <ProductCard name="AIR JORDAN 1 MID GS" price="₹7,999.00"> <img src={p6}/></ProductCard> 
        <ProductCard name="Jordan Spizike Low" price="₹14,955.00"> <img src={p1}/></ProductCard> 
        <ProductCard name="AIR FORCE 1" price="₹8,999.00"> <img src={p7}/></ProductCard> 
        <ProductCard name="Black and Flat Pewter" price="₹20,250.00"> <img src={p2}/></ProductCard> 
        {/* Add more product cards as needed */}
      </div>
      <button className="product__btn">
        <a href="products.html">Explore More</a>
      </button>
    </section>
  );
}

function ProductCard({ name, price, image }) {
  return (
    <div className="product__card">
      <h4>{name}</h4>
      <p>{price}</p>
      <img src={image} alt={name} />
    </div>
  );
}

export default ProductSection;
