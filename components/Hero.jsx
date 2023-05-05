import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='w-full h-screen text-center pt-28'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-md tracking text-gray-600'>Lets Build something together</p>
          <h1 className='py-2 text-gray-700 text-3xl md:text-4xl font-bold'>Hi, I am <span className='text-[#5651e5]'>Dumisani</span></h1>
          <h1 className='py-2 px-5 text-gray-700 text-3xl md:text-4xl font-bold'>A Front-End Developer & Data Analyst</h1>
          <p className='py-4 text-gray-600 text-md max-w-[90%] m-auto md:max-w-[70%] md:text-xl'>loerm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis atqueipsum dolor sit amet consectetur adipisicing elit. Quibusdam omnis atque 
          </p>
        <div className='flex items-center justify-around max-w-[330px] m-auto pt-10'>
          <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
            <Link href='https://www.linkedin.com/in/dumisani-lesley-zulu-8725a7151/' target='_blank'>
              <FaLinkedin size={20}/>
            </Link>
          </div>
          <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
            <FaFacebookF size={20}/>
          </div>
          <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
            <FaGithub size={20}/>
          </div>
          <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
            <FaTwitter size={20}/>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero