import React from 'react'
import './Home.css'
// import ScrollTrigger from 'gsap/ScrollTrigger'
// import { useInView } from 'react-intersection-observer'
import About from '../components/About'
import Projects from '../components/Projects'
import Greeting from '../components/Greeting'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
      <Greeting/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default Home
