import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-full bg-gradient-to-t from-[#818cf8] to-[#9c95f9] to-[#b39ffb] to-[#c6a9fc] to-[#d8b4fe] text-white " > 
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-indigo-500 ">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        Hey folks ! I'm Durgesh, a passionate UI/UX designer and developer who  love  crafting beautiful UIs and try to bring ideas to life using my comprehensive knowledge and understanding of web technologies.
        </p>
        <br />
        <p className="text-xl pb-20">
        When I'm not immersed in the world of development, you'll often find me exploring new avenues such as DevOps and 3D rendering, eager to delve deeper into their possibilities and streamline development processes. During my downtime, I channel my creativity into editing videos and photos, transforming moments into captivating visual stories. And yes, I must admit, I'm a big fan of cats! 😸
        </p>
      </div>
    </div>
  );
};

export default About;
