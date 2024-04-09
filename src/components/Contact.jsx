import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll , useMotionValueEvent, useTransform, useInView, useAnimation} from 'framer-motion'

const Contact = () => {

  const paragraphRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (paragraphRef.current) {
        const paragraphPosition = paragraphRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (paragraphPosition < windowHeight * 0.75 && paragraphPosition > -windowHeight * 0.25) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div name='about' className='w-full h-screen bg-[#1a1a1a] text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
        </div>
        <div></div>
        <div className='max-w-[1200px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className={`sm:text-right text-4xl font-bold fade-in ${isVisible ? 'active' : ''}`} ref={paragraphRef}>
            <p>Hi. I'm Nathan, nice to meet you. Please take a look around.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
