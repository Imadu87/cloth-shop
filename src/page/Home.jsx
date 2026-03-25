import React from 'react'
import Topbar from '../components/home/Topbar'
import Navbar from '../components/home/Navbar'
import HeroSection from '../components/home/Hero'
import Categories from '../components/home/Categories'
import Products from '../components/home/Products'
import WhyChooseUs from '../components/home/Chooseus'
import Contact from '../components/home/Contactus'
import Footer from '../components/home/Footer'
import FloatingWhatsApp from '../components/home/FloatingWhatsapp'
import BestSeller from '../components/home/BestSeller'

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