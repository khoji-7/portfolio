import React from 'react'
import {FaLinkedin,  FaInstagram, FaTelegram,FaGithub} from "react-icons/fa"


const Footer = () => {
  return (
    <div className='mt-12 px-6 md:px-0 text-white/70 py-8 container max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center'>
        
        <h1 className='text-2xl font-bold'>
            Hojiakbar 
        </h1>
        <div className='flex space-x-6 mt-4'>
            <a href="https://www.linkedin.com/in/hojiakbar-nematxonov-935aa0251/" className='hover:text-gray-300'>
                <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/khoji.7" className='hover:text-gray-300'>
                <FaInstagram size={24} />
            </a>
            {/* <a href="" className='hover:text-gray-300'>
                <FaTwitter size={24} />
            </a> */}
            <a href="https:/t.me/khoji_7" className='hover:text-gray-300'>
                <FaTelegram size={24} />
            </a>
            <a href="https://github.com/khoji-7" className='hover:text-gray-300'>
                <FaGithub size={24} />
            </a>
        </div>
    </div>
  )
}

export default Footer
