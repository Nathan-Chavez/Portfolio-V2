import React, { useEffect, useRef } from 'react'
import API from '../assets/projects/API.PNG'
import Portfolio from '../assets/projects/Portfolio.PNG'
import PortfolioV2 from '../assets/projects/PortfolioV2.PNG'
import { FaGithub } from "react-icons/fa";

import { motion, useScroll , useMotionValueEvent, useTransform, useInView, useAnimation} from 'framer-motion'


const Test = () => {


    const { scrollY } = useScroll()
    useMotionValueEvent(scrollY, "change", (lastest) =>{

    })

    // Code for the slide animation points using scrollY(absoulte value of scroll bar position)
    const first = useTransform(scrollY, [1117, 1576,1910,2237], [0,1,1,0]);
    const second = useTransform(scrollY, [1381, 1665,1910,2500], [0,1,1,0]);
    const third = useTransform(scrollY, [1665, 1910,1910,2700], [0,1,1,0]);
    //const opacity = useTransform(leftSlide, [500, 0, -500], [0, 1, 0]);
    
    const github = (repo) => {
        switch(repo){
            case 'portfolio-V2':
                window.open('https://github.com/Nathan-Chavez/Portfolio-V2', '_blank');
                break;
            case 'api':
                window.open('https://github.com/Nathan-Chavez/Equipment-Mangement-API', '_blank');
                break;
            case 'portfolio-V1':
                window.open('https://github.com/Nathan-Chavez/Web-Portfolio', '_blank');
                break;
            default:
                break;
        }
        
      };

      const site = (site) => {
        switch(site){
            case 'portfolio-V2':
                window.open(window.location.href, '_blank');
                break;
            case 'api':
                window.open('https://equipment-api.nathanchavezdev.com/api/search_api.php', '_blank');
                break;
            case 'portfolio-V1':
                window.open('https://portfolio.nathanchavezdev.com', '_blank');
                break;
            default:
                break;
        }
        
      };

  return (
    <div name='projects' className='flex flex-col w-full h-screen bg-[#DEE4E7] dark:bg-[#1a1a1a] dark:text-white text-#1a1a1a overflow-hidden'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='flex flex-col justify-center items-center w-full pb-8'>
                <motion.div>
                    <div  className='sm:text-right'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            Projects
                        </p>
                    </div>
                </motion.div>
            </div>
            <div className='w-[850px] grid sm:grid-cols-2 gap-8 px-4 overflow-hidden z-0'>
                    {/* Portfolio V2 */}
                    <div>
                    <motion.div style={{opacity: first}} className='sm:text-right text-4xl font-bold border-[#703be7] border-[3px] rounded-lg hover:scale-110 cursor-pointer'>
                        <div className='max-w-full'>
                            <img src={PortfolioV2} className='rounded-lg '/> 
                        </div>
                        <div className='absolute top-0 left-0 w-full h-full hover:bg-black  rounded-lg flex items-center justify-center text-white text-opacity-0 transition-opacity duration-300 hover:text-opacity-100 hover:bg-opacity-50'>
                            <span className='text-2xl'>Live-Site</span>
                        </div>
                    </motion.div>
                    </div>
                    
                    <motion.div style={{opacity: first}} >
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quaerat corrupti fuga sed possimus cumque facilis tempora repudiandae reprehenderit, 
                            repellendus perspiciatis quisquam. Nostrum illum ex commodi nulla asperiores cum aliquid.
                        </p>
                        <div className='flex justify-center items-center text-4xl'>
                            <FaGithub className=' mt-4 ml-2 cursor-pointer hover:scale-125 hover:border-2 hover:rounded-full hover:border-[#703be7]' onClick={() => github('portfolio-V2')}/>
                        </div>
                    </motion.div>

                    {/* API */}
                    <motion.div  style={{opacity: second}}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi quaerat corrupti fuga sed possimus cumque facilis tempora repudiandae reprehenderit, 
                            repellendus perspiciatis quisquam. Nostrum illum ex commodi nulla asperiores cum aliquid.
                        </p>
                        <div className='flex justify-center items-center text-4xl'>
                            <FaGithub className=' mt-4 ml-2 cursor-pointer hover:scale-125 hover:border-2 hover:rounded-full hover:border-[#703be7]' onClick={() => github('api')}/>
                        </div>
                    </motion.div>
                    <motion.div style={{opacity: second}}>
                        <div>
                            <img src={API} className='rounded-lg' /> 
                        </div>
                        <div className='absolute top-0 left-0 w-full h-full hover:bg-black  rounded-lg flex items-center justify-center text-white text-opacity-0 transition-opacity duration-300 hover:text-opacity-100 hover:bg-opacity-50'>
                                <span className='text-2xl'>Live-Site</span>
                            </div>
                    </motion.div>
                    
                    
                    
                </div>
        </div>
        
    </div>
  )
}

export default Test



