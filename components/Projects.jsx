import Image from 'next/image'
import React from 'react'
import projectImg1 from '../public/assets/projects/project_1.png'
import projectImg2 from '../public/assets/projects/project_2.png'
import projectImg3 from '../public/assets/projects/project_3.png'
import projectImg4 from '../public/assets/projects/project_4.png'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div className='w-full'>
      <div className='max-w-[80%] sm:max-[80%] mx-auto px-5 py-20'>
          <p className='uppercase text-xl tracking text-[#5651e5] text-center font-semibold'>Projects</p>
          <h2 className='uppercase text-xl tracking text-gray-800 text-center font-semibold mb-10'>Here are some projects that I have worked  on.</h2>
          <div className='grid sm:grid-cols-2 xl:grid-col-3 gap-y-8 gap-x-8'>
            <ProjectItem title='project 1' backgroundImg={projectImg1} projectUrl='/'/>
            <ProjectItem title='project 2' backgroundImg={projectImg2} projectUrl='/'/>
            <ProjectItem title='project 3' backgroundImg={projectImg3} projectUrl='/'/>
            <ProjectItem title='project 4' backgroundImg={projectImg4} projectUrl='/'/>
            <ProjectItem title='project 2' backgroundImg={projectImg2} projectUrl='/'/>
          </div>
      </div>
    </div>
  )
}

export default Projects