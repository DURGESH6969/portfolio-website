import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Projects from './Component/Projects'
import Experience from './Component/Experience'
import Blog from './Component/Blog'
import Footer from './Component/Footer'
import TechStack from './Component/TechStack'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Experience/>
      <TechStack/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
