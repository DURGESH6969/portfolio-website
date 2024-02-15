import React from 'react';
import multithreading from "../assets/multithreading.jpg";
import monolithic from "../assets/monolithic.jpg";
import reactImg from "../assets/reactImg.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Multithreading in Java',
      src: multithreading,
      href: "https://www.linkedin.com/posts/durgesh-gupta-kol_multithreading-in-java-lets-see-some-activity-7131774289954959360-2N07?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: 2,
      title: 'Monolithic vs Microservices',
      src: monolithic,
      href: "https://www.linkedin.com/posts/durgesh-gupta-kol_monolithic-vs-microservices-choosing-activity-7136557096937951233-1QJr?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: 3,
      title: 'Unlocking the Secrets of React: Lazy Loading for Lightning-Fast Apps! ⚡️✨',
      src: reactImg,
      href: "https://durgeshgupta.hashnode.dev/how-to-optimize-your-react-application-using-lazy-loading"
    }
    // Add more blog posts as needed
  ];

  return (
    <div  name="blog" className='w-full h-full bg-gradient-to-t from-[#818cf8] to-[#9c95f9] to-[#b39ffb] to-[#c6a9fc] to-[#d8b4fe] text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-indigo-500'>Blog</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
          {blogPosts.map(({ id, title, href, src }) => (
            <div key={id} className='rounded-md overflow-hidden shadow-md hover:scale-105 duration-500'>
              <img src={src} alt={title} className='w-full h-64 object-cover ' />
              <div className='p-4'>
                <h3 className='text-xl font-semibold text-indigo-900 mb-2'>{title}</h3>
                <a href={href} target="_blank" rel="noopener noreferrer" className='text-indigo-600 hover:text-indigo-800'>Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
