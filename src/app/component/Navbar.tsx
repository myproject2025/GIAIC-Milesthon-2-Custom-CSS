import Link from 'next/link';
import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {
  openNav:()=>void
}

export default function Navbar({openNav}:Props) {
  return (
    <nav>
        <div className='Navbar'>
            <h1 className='logo'>
               WEB 
               <span className='text-yellow-300'> DEV</span>
            </h1>
          

            <div className='nav-link text-white'><Link href="#Home">Home</Link></div>
            {/* <div className='nav-link text-white'>SERVICES</div> */}
            <div className='nav-link text-white'><Link href="#About">About</Link></div>
            {/* <div className='nav-link text-white'>PROJECT</div> */}
            {/* <div className='nav-link text-white'>BLOG</div> */}
            <div className='nav-link text-white'><Link href="#Contact">Contact</Link></div>
            

            <div onClick={openNav} className='text-[35px] w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300'><GiHamburgerMenu />
            </div>

        </div>
     
    </nav>
  )
}
