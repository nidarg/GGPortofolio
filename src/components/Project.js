import React,{useState,useEffect} from 'react'
// import {Link} from 'react-router-dom'
import sanityClient from '../client.js'

const Project = () => {
  const [projectData, setProjectData] = useState(null)
  

  useEffect(()=>{
    sanityClient.fetch(`*[_type == 'project']{
      title,date,description,projectType,link,videoLink
    }`)
    .then((data) =>setProjectData(data))
      .catch(console.error)
  },[])

  return (
    <main className='bg-slate-300 min-h-screen p-12 xs:w-full p-0'>
    <section className='container mx-auto'>
      <h1 className='text-5xl flex justify-center cursive mb-10'>My Projects</h1>
      <section className='grid lg:grid-cols-2 gap-8' >
        {projectData && projectData.map((project,index)=>{
          
          return(
        <article key={index} className='relative  rounded-lg shadow-xl bg-white p-16'>
          <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-red-700'>
            <a href={project.link} alt={project.title} target='_blank' rel='noreferrer noopener'>{project.title}</a>
          </h3>
          <div className='text-gray-500 text-xs space-x-4 space-y-6'>
            <span>
              <strong className='font-bold '>Type</strong>:{' '}{project.projectType}
            </span>
            <video src={project.videoLink}  muted controls/>
            <p className='my-6 text-lg text-gray-700 leading-relaxed'>{project.description}</p>

            <a href={project.link} alt={project.title} target='_blank' rel='noreferrer noopener' className='text-red-500 font-bold hover:underline hover:text-red-400'>
              <button className='border-4 border-red-700 p-4 rounded-lg  transition ease-in-out duration-700 hover:drop-shadow-xl hover:-translate-y-1'>
               Visit Site
              </button>  
            </a>
            
          </div>
        </article>
          )
})}
      </section>
    </section>
  </main>
  )
}

export default Project