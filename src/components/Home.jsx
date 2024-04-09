import React, { useEffect, useRef } from 'react';
import { motion, useScroll , useMotionValueEvent, useTransform, useInView, useAnimation} from 'framer-motion'

const Home = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
    })
    const slide = useTransform(scrollYProgress, [0, 1], [0, -180]);
    //const leftSlide = useTransform(scrollXProgress, [0, 1], [0, -180]);


  return (
    <div name='home' className='w-full md:h-[75vh] h-screen bg-gradient-to-r from-[#0792e3] to-[#9952e0] bg-gradient-to-r dark:from-[#2101ad] dark:to-[#b50dff]'>
        <motion.div 
        variants={{hidden: {opacity: 0, x: -300}, visible: {opacity: 1, x: 0}}} 
        initial="hidden" 
        animate="visible" transition={{duration: 1.5}} 
        className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-start h-full'>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Nathan Chavez</h1>
            <h2 className='text-2xl sm:text-5xl font-bold text-[#ccd6f6]'>Software Engineer</h2>
            <motion.p 
            variants={{hidden: {opacity: 0, y: 75}, visible: {opacity: 1, y: 0}}} initial="hidden" animate="visible" transition={{duration: 1.5, delay: 1.0}} className='py-4 max-w-[700px] text-[#ccd6f6]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</motion.p>
        </motion.div>
    </div>
  )
}

export default Home