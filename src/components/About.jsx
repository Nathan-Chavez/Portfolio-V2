import React, { useEffect, useRef } from 'react';
import { motion, useScroll , useMotionValueEvent, useTransform, useInView, useAnimation} from 'framer-motion'
import Github from '../assets/icons/github.svg'
import Linkedin from '../assets/icons/linkedin.svg'

const About = () => {
    const ref = useRef(null)
    const mainControls = useAnimation()
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
        if (isInView){
            mainControls.start("visible");
        }
    }, [isInView]);

    const { scrollY } = useScroll()
    useMotionValueEvent(scrollY, "change", (lastest) =>{
        console.log(lastest + ' about')
    })

    // Code for the slide animation points using scrollY(absoulte value of scroll bar position)
    const leftSlide = useTransform(scrollY, [445, 955,1100,1350], [-500,0,0,500]);
    const rightSlide = useTransform(scrollY, [445, 955,1100,1350], [500,0,0,-500]);
    const upSlide = useTransform(scrollY, [445, 955,1100,1350], [500,0,0,-500]);
    const opacity = useTransform(leftSlide, [500, 0, -500], [0, 1, 0]);

    // Functions to open links for github and linkedin in separate windows
    const github = () => {
        window.open('https://github.com/Nathan-Chavez', '_blank');
    };

    const linkedin = () => {
        window.open('https://www.linkedin.com/in/nate-e-chavez/', '_blank')
    }

    // file location for resume
    const ResumeFile = '../../files/Nathan_Chavez-Resume.pdf'
    // Function to open resume in separate window
    const resumeDownload = () => {
        window.open(ResumeFile, '_blank')
    }

    return (
        <div name='about' className='w-full h-screen bg-[#DEE4E7] dark:bg-[#1a1a1a] dark:text-white text-[#1a1a1a] overflow-hidden'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <motion.div  style={{ x: leftSlide, opacity}} className='max-w-[1000px] w-full grid grid-cols-2 gap-8'> 
                    <div  className='sm:text-right pb-8 pl-4'>
                        <h1 className='text-4xl font-bold inline border-b-4 dark:border-pink-600 border-[#703be7]'>
                            About
                        </h1>
                    </div>
                </motion.div>
                <div></div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <motion.div  style={{ y: upSlide, opacity}} className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Nathan, nice to meet you. Please take a look around.</p>
                    </motion.div>
                    <motion.div  style={{ x: rightSlide, opacity}}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quaerat corrupti fuga sed possimus cumque facilis tempora repudiandae reprehenderit, 
                        repellendus perspiciatis quisquam. Nostrum illum ex commodi nulla asperiores cum aliquid.
                    </p>
                    <div className='flex my-2 items-center ml-4'>
                        <img src={Linkedin} className="w-12 h-12 mr-4 dark:invert hover:scale-110 cursor-pointer" alt="GitHub Logo" onClick={linkedin}></img>
                        <img src={Github} className="w-12 h-12 mr-4 dark:invert hover:scale-110 cursor-pointer" alt="GitHub Logo" onClick={github}></img>
                        <button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={resumeDownload}
                            className="dark:text-white text-black dark:border-white border-black border-2 
                            hover:bg-gradient-to-r from-[#0792e3] to-[#9952e0]  
                            dark:hover:border-bg-gradient-to-r dark:border-pink-600 border-[#703be7] py-3 px-6 rounded-lg ">
                            Resume
                        </button>
                    </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About;
