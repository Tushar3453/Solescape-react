import React from "react";

import './landing.css';
import about from '../assets/assets/about.jpg'

function About() {
  return (
    <section class="section__container about__container" id="about">
        <div class="about__header">
            <div>
                <h2 class="section__header">About Us</h2>
                <p class="section__description">
                    At our shoe reselling website, we are passionate about connecting sneaker enthusiasts with high-quality, sought-after footwear. Our mission is to provide a curated selection of the latest and most exclusive sneakers.
                </p>
            </div>
        </div>
        <div class="about__content">
            <div class="about__image">
            <img src={about} alt="About Us" ></img> 
            </div>
            <div class="about__grid">
                <div class="about__card">
                    <h3>1.</h3>
                    <h4>Our Commitment</h4>
                    <p>We are dedicated to authenticity and quality.</p>
                </div>
                <div class="about__card">
                    <h3>2.</h3>
                    <h4>Curated Selection</h4>
                    <p>Our team of sneaker experts is constantly on the lookout for the newest releases.</p>
                </div>
                <div class="about__card">
                    <h3>3.</h3>
                    <h4>Customer Experience</h4>
                    <p>We believe that shopping for sneakers should be as enjoyable as wearing them.</p>
                </div>
                <div class="about__card">
                    <h3>4.</h3>
                    <h4>Community Engagement</h4>
                    <p>We are more than just a store; we are a community of sneaker lovers.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

function AboutCard({ title, description }) {
  return (
    <div className="about__card">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default About;
