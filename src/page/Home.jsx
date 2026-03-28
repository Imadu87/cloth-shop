import React from 'react'

import Products from '../components/home/Products'
import WhyChooseUs from '../components/home/Chooseus'
import BestSeller from '../components/home/BestSeller'

const Home = () => {
  return (
    <div>
        <Products />
        <BestSeller />
        <WhyChooseUs />
    </div>
  )
}

export default Home