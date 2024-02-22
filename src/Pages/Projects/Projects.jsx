import React from 'react';
import  { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
import ProjectCards from '../ProjectCards/ProjectCards';
import useTitle from '../../MyHook/useTitle';

const Projects = () => {
  useTitle('Projects')
  const [allProjects, setAllProjects] = useState([]);
  useEffect(() => {
    fetch('https://portfolio-user-d34h.onrender.com/projects')
      .then(res => res.json())
      .then(data => setAllProjects(data))
  }, [])

  return (
    <div className='py-24  px-14'>

      <div className='text-center text-gray-400'>
        <h2 className='text-4xl font-bold sm:text-3xl pb-5 '>M<span className='p-text '>yProjec</span>ts</h2>
        <p className='text-lg pt-5 pb-14'>An accomplished individual with a powerful background in <span>React, JavaScript, HTML and CSS, Express JS, Node JS, Tailwind CSS, and MongoDB,</span> I feel within the power of the web and have an intense want to be told the way to improve the web' absolute  core practicality and to even be concerned in its future development. He conjointly incorporates a superb
          understanding of the terribly latest Programming tricks.</p>

      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 '>
        {
          allProjects?.map(allProject => <ProjectCards
            key={allProject?._id}
            allProject={allProject}
          ></ProjectCards>)
        }
      </div>
    </div>
  )
}

export default Projects
