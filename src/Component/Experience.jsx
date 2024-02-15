import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Frontend Intern',
      company: 'The mothers Cook',
      duration: 'April 2023 - August 2023',
      description: 'Developed and maintained key features for their official website using HTML,Bootstrap and javascript.',
    },
    // Add more experiences as needed
  ];

  return (
    
    <div name="experience" className='w-full h-screen bg-gradient-to-t from-[#818cf8] to-[#9c95f9] to-[#b39ffb] to-[#c6a9fc] to-[#d8b4fe] text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-indigo-500'>Experience</p>
        </div>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0'>
          {experiences.map(({id, role, company, duration, description}) => (
            <div key={id} className='shadow-md shadow-[#debfff] rounded-lg p-4'>
              <h3 className='text-2xl font-extrabold'>{role}</h3>
              <h4 className='text-xl font-bold'>{company}</h4>
              <p className='text-indigo-900 font-semibold'>{duration}</p>
              <p className='text-indigo-900 font-semibold'>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
