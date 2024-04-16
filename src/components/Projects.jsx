import React from 'react'
import { motion, useScroll , useMotionValueEvent, useTransform, useInView, useAnimation} from 'framer-motion'


const Projects = () => {
    
  return (
    <div name='projects' className='w-full h-screen bg-[#DEE4E7] dark:bg-[#1a1a1a] dark:text-white text-#1a1a1a'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
                <motion.div  className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div  className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                </motion.div>
                <div></div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <motion.div  className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Nathan, nice to meet you. Please take a look around.</p>
                    </motion.div>
                    <motion.div  >
                    <p>Hi. I'm Nathan, nice to meet you. Please take a look around.Hi. I'm Nathan, nice to meet you. Please take a look around.Hi. I'm Nathan, nice to meet you. Please take a look around.Hi. I'm Nathan, nice to meet you. Please take a look around.</p>
                    </motion.div>
                </div>
            </div>
    </div>
  )
}

export default Projects