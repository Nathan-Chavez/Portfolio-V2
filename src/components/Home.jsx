import React from 'react';
import { motion} from 'framer-motion'

const Home = () => {

  return (
    <div  name='home' className=' overflow-hidden w-screen h-screen sm:h-[75vh]  bg-gradient-to-r from-[#0792e3] to-[#9952e0] bg-gradient-to-r dark:from-[#2101ad] dark:to-[#b50dff] pointer-events-none'>
        <motion.div // Add fade in animation on initial load
        variants={{hidden: {opacity: 0, x: -300}, visible: {opacity: 1, x: 0}}} 
        initial="hidden" 
        animate="visible" transition={{duration: 1.5}} 
        className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-start h-full'>
            <h1 className='text-4xl sm:text-7xl font-bold dark:text-white text-black'>Nathan Chavez</h1>
            <motion.h2 
            variants={{hidden: {opacity: 0, y: 75}, visible: {opacity: 1, y: 0}}} 
            initial="hidden" 
            animate="visible" 
            transition={{duration: 1.5, delay: 1.0}} 
            className='text-2xl sm:text-5xl font-bold text-[#ccd6f6]'>
            Software Engineer</motion.h2>
        </motion.div>
    </div>
  )
}

export default Home