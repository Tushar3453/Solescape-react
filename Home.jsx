import React from 'react'
import About from '../components/About'
import Slider from '../components/Slider'
import ProductSection from '../components/ProductSection'

const Home = () => {
  return (
    <div>
      <Slider/>  
      <About/>
      <ProductSection/>
    </div>
  )
}

export default Home
