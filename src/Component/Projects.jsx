import React,{useState} from 'react'
import bookstore from '../assets/bookstore.jpg';
import selenium from '../assets/selenium.png';
import AI from '../assets/AI.jpg';
import food from '../assets/brand-logo.png';
import main from "../assets/main.jpg";

const Projects = () => {

  const [activeId, setActiveId] = useState(null);

  const projectsArr = [
    {
      id: 1,
      src : food,
      details: "This is MERN stack Project, it's in inital stage so as of now it's not hosted yet but you can see the progress in the code part.",
      demo:false,

    },
    {
      id: 2,
      src : selenium,
      details: "This is my first attempt to explore automation here I have write a python script that automates the process of login and adding product to cart and then checkout and logout. I have used Selenium Web driver. Also it's not hosted anywhere so no demo here.",
      demo:false,
    },
    {
      id: 3,
      src : AI,
      details: "This is a simple mockup site which have UI of a real website also I have put some articles about Artificial Intelligence particularly Chat-gpt.Also it's not yet hosted anywhere so no demo. here",
      demo : true,
      url : "https://chatgpt3blog.netlify.app/",
    },
    {
      id: 4,
      src : bookstore,
      details : "This is also a work in progress web app where user can add different books of their choice and alos update the list based upon their requirement.",
      demo:false,
    },
    {
      id: 5,
      src : main,
      details : "This is a simple weather app that let's user to input their city name and then the live weather condition to the user.",
      demo:true,
      url : "https://mausam-vibhag-v1.netlify.app",
    },
  ];
  
  const handleReadMore = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div name="project"  className='w-full h-full bg-gradient-to-b from-[#818cf8] to-[#9c95f9] to-[#b39ffb] to-[#c6a9fc] to-[#d8b4fe] text-white'>

      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
           <p className='text-4xl font-bold inline border-b-4 border-indigo-500'>Projects</p> 
           <p className='py-6'>These are the projects which i have build. </p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            projectsArr.map(({id,src,details,demo,url})=>(
              <div key={id} className='shadow-md shadow-[#debfff] rounded-lg flex flex-col'>
              <img src={src} alt="bookstore-img" className=' h-full w-full object-cover  rounded-md duration-200 hover:scale-105 overflow-hidden cursor-pointer'/>
              <div className='flex items-center justify-center mt-auto'>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:underline'>Code</button>
                {demo && <a href={url} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:underline'>Demo</a>}
              </div>
             <div className='flex flex-col items-center justify-center m-auto '>
             <button onClick={() => handleReadMore(id)} className='w-full px-6 py-3 m-4 duration-200 hover:scale-105 hover:underline '>
                {activeId === id ? 'Read Less' : 'Read More'}
                </button>
                {activeId === id && <p className='p-2'>{details}</p>}
             </div>
          </div>
            ))
          }
     
        </div>

      </div>
    </div>
  )
}

export default Projects
