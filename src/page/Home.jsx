import React from 'react'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/Hero'
import Categories from '../components/Categories'
import Products from '../components/Products'
import WhyChooseUs from '../components/Chooseus'
import Contact from '../components/Contactus'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsapp'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <div>
        <Topbar />
        <Navbar />
        <HeroSection />
        <Categories />
        <Products />
        <BestSeller />
        <WhyChooseUs />
        <Contact />
        <Footer />
        <FloatingWhatsApp />
    </div>
  )
}

export default Home