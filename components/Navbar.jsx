import React, { useState } from 'react'
import { FaLinkedin, FaFacebookF, FaGithub, FaTwitter, FaThLarge } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = () => {
    setMenuOpen(!menuOpen)
  }

  const downloadPDF = () => {
    const pdfUrl = 'https://drive.google.com/file/d/13_NaqIA5SyMwhsSITIN0lDx_XCu1Vpf7/view?usp=sharing';
    window.open(pdfUrl, '_blank');
  };


  return (
    <nav className='fixed w-full h-24 bg-white shadow-xl z-50'>
      <div className='flex justify-between h-full items-center max-w-[80%] mx-auto text-black text-xl font-bold'>
        <Image src='/../public/assets/dumisani.png' width='150' height='100' alt='Logo'/>
        <div>
          <ul className='hidden md:flex items-center'>
            <Link href='/'>
              <li className='ml-5 uppercase text-black text-sm font-bold hover:text-orange-600 eas duration-100'>Home</li>
            </Link>
            <Link href='/'>
              <li className='ml-5 uppercase text-black text-sm font-bold hover:text-orange-600 eas duration-100'>About Me</li>
            </Link>
            <Link href='/'>
              <li className='ml-5 uppercase text-black text-sm font-bold hover:text-orange-600 eas duration-100'>Projects</li>
            </Link>
            <Link href='/'>
              <li className='ml-5 uppercase text-black text-sm font-bold hover:text-orange-600 eas duration-100'>Contact</li>
            </Link>
            <button onClick={downloadPDF} className="ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Download CV
              {/* <FiDownload className="ml-2" size={20}/> */}
          </button>
          </ul>
        </div>
        <div onClick={handleNav} className='md:hidden cursor-pointer pl-24'>
          <FaThLarge size={30}/>
        </div>
      </div>
      <div className={
        menuOpen 
        ? 'fixed top-0 left-0 w-[65%] h-screen bg-gray-100 p-10 ease-in duration-500' 
        : 'fixed top-0 left-[-100%] w-[65%] p-10 ease-in duration-500'
      }>
        <div className='flex w-full items-center justify-between'>
          {/* <Image src={Logo} width={105} height={55} alt='Logo'/> */}
          Logo
          <div onClick={handleNav} className='cursor-pointer'>
            close
          </div>
        </div>
        <div className='flex-col py-4'>
          <ul>
            <Link href='/'>
              <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer text-sm font-bold'>Home</li>
            </Link>
            <Link href='/about'>
              <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer text-sm font-bold'>About Me</li>
            </Link>
            <Link href='/services'>
              <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer text-sm font-bold'>Projects</li>
            </Link>
            <Link href='/blog'>
              <li onClick={() => setMenuOpen(false)} className='py-4 cursor-pointer text-sm font-bold'>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar