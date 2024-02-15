import React from 'react';
import reactjsicon from "../assets/reactjsicon.png";
import cssLogo from "../assets/cssLogo.png";
import githubIcon from "../assets/githubIcon.png";
import html from "../assets/html5Logo.png";
import javascript from "../assets/javascript.png";
import TailwindCSS from "../assets/TailwindCSS.png";
import mysqlLogo from "../assets/mysqlLogo.png";
import MongoDBLogo from "../assets/MongoDBLogo.png";

const TechStack = () => {
  const techs = [
    {
      id: 1,
      src: html,
      alt: html,
      Title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: cssLogo,
      alt: cssLogo.alt,
      Title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      alt: javascript,
      Title: "Javascript",
      style: "shadow-amber-500",
    },
    {
      id: 4,
      src: reactjsicon,
      alt: reactjsicon,
      Title: "React Js",
      style: "shadow-blue-500 bg-blue-950 ",
    },
    {
      id: 5,
      src: TailwindCSS,
      alt: TailwindCSS,
      Title: "Tailwind CSS",
      style: "shadow-cyan-500 bg-blue-950 ",
    },
    {
      id: 6,
      src: githubIcon,
      alt: githubIcon,
      Title: "GitHub",
      style: "shadow-slate-500 bg-blue-950 ",
    },
    {
      id: 7,
      src: mysqlLogo,
      alt: mysqlLogo,
      Title: "MySQL",
      style: "shadow-cyan-500 bg-sky-950 ",
    },
    {
      id: 8,
      src: MongoDBLogo,
      alt: MongoDBLogo,
      Title: "MongoDB",
      style: "shadow-green-700 bg-green-950 ",
    },
  ];

  return (
    <div className='w-full h-full bg-gradient-to-b from-[#818cf8] to-[#9c95f9] to-[#b39ffb] to-[#c6a9fc] to-[#d8b4fe] text-white'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-indigo-500 p-2'>Tech Stack</p>
          <p className='py-12 font-medium '>These are the technologies which I use and try to constantly improve.</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 '>
          {techs.map(({ src, id, alt, style,Title }) => (
            <div key={id} className={`flex flex-col items-center justify-center shadow-md text-center hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt={alt} className='w-20 mx-auto' />
              <p className='mt-4'>{Title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
