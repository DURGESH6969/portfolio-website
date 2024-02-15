import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import hero from '../assets/hero.png'


const Home = () => {

  return (
    <div 
    name="home" className='h-screen w-full  bg-gradient-to-b from-[#818cf8] to-[#d8b4fe]'
    >

     <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
      <div className='flex flex-col justify-center h-full md:pr-8 '>
        <h2 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 '>I'm a web Developer </h2>
        <p className='py-4 max-w-md'>I built tangible products and bring ideas into reality.</p>
        <div>
          <a  href='/Durgesh_Gupta_resume.pdf' download className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  hover:scale-105 cursor-pointer'>
            Download CV
            <span className='group-hover:rotate-90 duration-300 '>
            <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
            </span>
          </a>
        </div>
      </div>

    <div>
      <img 
      src={hero} alt="profile-pic"  
      className="rounded-2xl mx:auto w-full md:max-w-md object-cover mt-8 md:mt-0"
      />
    </div>

     </div>
    </div>
  )
}

export default Home
