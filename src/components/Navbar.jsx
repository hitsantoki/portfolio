import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from 'react-icons/fa';

function Navbar() {
  return (
    
    <>
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='text-white flex flex-shrink-0 items-center text-2xl'>
            Hit Santoki
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://leetcode.com/u/hitsantoki40/" target="_blank" rel="noopener noreferrer">
        <SiLeetcode/>
        </a>  
        <a href="https://www.linkedin.com/in/hit-santoki40/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/hitsantoki" target="_blank" rel="noopener noreferrer">
        <FaGithub/>
        </a>  
        <a href="https://www.instagram.com/hit_2_1?utm_source=qr&igsh=MjcwYXJndHd0dGlo" target="_blank" rel="noopener noreferrer">
        <FaInstagram/>          
        </a>
        </div>
    </nav>
    </>
  )
}

export default Navbar