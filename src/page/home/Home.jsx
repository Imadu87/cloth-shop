import React from 'react'

import Products from '../../components/products/Products'
import WhyChooseUs from './components/Chooseus'

const Home = () => {
  return (
    <div>
        <Products heading={"Featured Products"} discount={10} isSale={true} />
        <Products heading={"Best Sellers"} isBestSeller={true} />
        <WhyChooseUs />
    </div>
  )
}

export default Home