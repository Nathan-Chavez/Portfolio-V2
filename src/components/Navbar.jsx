import React from 'react'
import Logo from '../assets/icons/logo.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '50px'}} />
       </div>
       <div>
            {/* Navbar / Menu */}
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
       </div>

       {/* Drop Doown Menu */}
            <div></div>
            {/* Mobile Navbar / Menu */}
            <div></div>
    </div>
  )
}

export default Navbar