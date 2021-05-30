import React from 'react'
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import Offers from '../components/Offers'
import LangProvider from '../components/LangContext'



const HomePage = () => {
  return (
    <>
      <LangProvider>
          <Navigation />
          <Header />
          <AboutUs />
          <Offers />
          <Gallery />
          <Contact />
      </LangProvider>
    </>
  )
}

export default HomePage
