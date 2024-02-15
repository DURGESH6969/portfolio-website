import React from 'react';

const Footer = () => {
  return (
    <footer className=' w-full h-[200px] bg-gradient-to-b from-[#818cf8] to-[#9c95f9] to-[#b39ffb] to-[#c6a9fc] to-[#d8b4fe] text-white pt-20 pb-8'>
     <div className='max-w-screen-lg mx-auto px-4 flex flex-col  items-center justify-center md:flex-row md:justify-between'>
        <div className='flex space-x-4 mb-4 md:mb-0'>
          <a href='https://github.com/durgesh6969' target='_blank' rel='noopener noreferrer' className='text-lg hover:text-indigo-500'>GitHub</a>
          <a href='https://www.linkedin.com/in/durgesh-gupta-kol/' target='_blank' rel='noopener noreferrer' className='text-lg hover:text-indigo-500'>LinkedIn</a>
          <a href='https://twitter.com/Electrosaurus_' target='_blank' rel='noopener noreferrer' className='text-lg hover:text-indigo-500'>Twitter</a>
        </div>
        <p className='text-center text-lg'>© {new Date().getFullYear()} Developed by Durgesh Gupta</p>
      </div>
    </footer>
  );
};

export default Footer;
