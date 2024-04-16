import React, { useState, useEffect } from 'react';
import Logo from '../assets/icons/Logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, Events, scrollSpy } from 'react-scroll'; 
import SliderToggle from './ThemeSlider'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {
    });

    Events.scrollEvent.register('end', () => {
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='fixed w-full z-50 h-[50px] flex justify-between items-center px-4 bg-gradient-to-r from-[#0792e3] to-[#9952e0] dark:bg-gradient-to-r dark:from-[#2101ad] dark:to-[#b50dff] text-gray-400'>
      <div>
        <img src={Logo} alt='Logo' style={{ width: '70px' }}/>
      </div>
      {/* Desktop Menu */}
      <div className='hidden md:flex'>
        <ul className='flex space-x-4 divide-x-2'>
          {/* Smooth scrolling links */}
          <li className='hover:text-white'>
            <Link
              to='home'
              smooth={true}
              duration={550}
              activeClass='text-white'
              spy={true}
              onSetActive={() => setActiveSection('home')}
            >
              Home
            </Link>
          </li>
          <li className='hover:text-white'>
            <Link
              to='about'
              smooth={true}
              duration={550}
              activeClass='text-white'
              spy={true}
              onSetActive={() => setActiveSection('about')}
            >
              About
            </Link>
          </li>
          <li className='hover:text-white'>
            <Link
              to='projects'
              smooth={true}
              duration={550}
              activeClass='text-white'
              spy={true}
              onSetActive={() => setActiveSection('projects')}
            >
              Projects
            </Link>
          </li>
          <li className='hover:text-white'>
            <Link
              to='contact'
              smooth={true}
              duration={550}
              activeClass='text-white'
              spy={true}
              onSetActive={() => setActiveSection('contact')}
            >
              Contact
            </Link>
          </li>
          <li>
            <SliderToggle theme={theme} setTheme={setTheme} />
          </li>
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div className='md:hidden z-10' onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'>
          <ul className='absolute top-0 left-0 w-full h-screen bg-[#DEE4E7] dark:bg-[#1a1a1a] dark:text-white text-[#1a1a1a] flex flex-col justify-center items-left'>
            {/* Smooth scrolling links for mobile menu */}
            <li className={`py-6 text-4xl ${activeSection === 'home'} border-b border-t dark:border-white border-black`}>
              <Link onClick={toggleMenu} to='home' smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className={`py-6 text-4xl ${activeSection === 'about'} border-b dark:border-white border-black`}>
              <Link onClick={toggleMenu} to='about' smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className={`py-6 text-4xl ${activeSection === 'projects'} border-b dark:border-white border-black`}>
              <Link onClick={toggleMenu} to='projects' smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li className={`py-6 text-4xl ${activeSection === 'contact'} border-b dark:border-white border-black`}>
              <Link onClick={toggleMenu} to='contact' smooth={true} duration={500}>
                Contact
              </Link>
            </li>
            <li>
            <SliderToggle theme={theme} setTheme={setTheme} />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
