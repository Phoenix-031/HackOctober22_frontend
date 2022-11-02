import React from 'react'
// import { useNavigate } from 'react-router-dom'
import Courses from '../../components/Courses/Courses'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
// import About from '../../components/About/About'

const Home = () => {
    // const navigate = useNavigate()
    
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <Footer />
    </>

    
  )
}

export default Home