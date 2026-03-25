import React from 'react'
import HeroSection from '../components/home/Hero'
import Categories from '../components/home/Categories'
import Products from '../components/home/Products'
import WhyChooseUs from '../components/home/Chooseus'
import Contact from '../components/home/Contactus'
import FloatingWhatsApp from '../components/home/FloatingWhatsapp'
import BestSeller from '../components/home/BestSeller'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <Categories />
        <Products />
        <BestSeller />
        <WhyChooseUs />
        <Contact />
        <FloatingWhatsApp />
    </div>
  )
}

export default Home