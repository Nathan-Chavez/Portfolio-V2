import React, { useEffect, useRef, useState } from 'react'
import API from '../assets/projects/API.PNG'
import Portfolio from '../assets/projects/Portfolio.PNG'
import PortfolioV2 from '../assets/projects/PortfolioV2.PNG'
import { FaGithub } from "react-icons/fa";
import REACT from '../assets/icons/react.png';
import TAILWIND from '../assets/icons/tailwind.png';
import AWS from '../assets/icons/aws.png';
import HTML from '../assets/icons/html.png';
import CSS from '../assets/icons/css.png';
import PHP from '../assets/icons/php.png';
import NGINX from '../assets/icons/nginx.png'
import MYSQL from '../assets/icons/mysql.png'
import JQUERY from '../assets/icons/jquery.png'
import BOOTSTRAP from '../assets/icons/bootstrap.png'

import { motion, useScroll , useMotionValueEvent, useTransform, useInView, useAnimation} from 'framer-motion'


const Projects = () => {


    const { scrollYProgress } = useScroll()


    // Code for the slide animation points using scrollY(absoulte value of scroll bar position)
    const first = useTransform(scrollYProgress, [.45, .51, .66,.75], [0,1,1,0]);
    const second = useTransform(scrollYProgress, [.49, .55, .66,.86], [0,1,1,0]);
    const third = useTransform(scrollYProgress, [.59, .66, .66,.91], [0,1,1,0]);
    
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

        

        const api = () => {
            window.open('https://equipment-api.nathanchavezdev.com/api/search_api.php', '_blank');
        };

        const portfolio = () => {
            window.open('https://portfolio.nathanchavezdev.com', '_blank');
        };

        const v2 = () => {
            window.open(window.location.href, '_blank');
        };

  return (
    <div name='projects' className='releative flex flex-col w-screen h-1/2 sm:h-screen bg-white dark:bg-[#1a1a1a] dark:text-white text-#1a1a1a overflow-hidden'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='flex flex-col justify-center items-center w-full pb-8'>
                <div>
                    <div  className='sm:text-right'>
                        <p className='text-4xl font-bold inline border-b-4 dark:border-pink-600 border-[#703be7]'>
                            Projects
                        </p>
                    </div>
                </div>
            </div>
            <div className='max-w-[300px] sm:max-w-[800px] w-full grid  sm:grid-cols-2 gap-8 px-4'>
                {/* Portfolio-V2 */}
                <motion.div style={{opacity: first}} className='relative sm:text-right text-4xl border-[#703be7] border-[3px] rounded-lg cursor-pointer hover:scale-110' onClick={v2}>
                    <div className=''>
                        <img src={PortfolioV2} className='rounded-lg'/>          
                    </div>
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black rounded-lg flex items-center justify-center text-white text-opacity-0 transition-opacity duration-300 hover:text-opacity-100 hover:bg-opacity-50'>
                        <span className='text-2xl'>Live-Site</span>
                    </div>
                </motion.div>
                <motion.div  style={{opacity: first}}>
                    <p className='pb-4'>A responsive portfolio website built with React.js and Tailwind CSS. 
                    Includes animations powered by Framer Motion. Integrated Webform3 for secure contact information submissions.
                    </p>
                    <div className='flex items-center text-4xl divide-x-2 dark:divide-white divide-black'>
                        <FaGithub className=' mr-2 cursor-pointer hover:scale-125 hover:border-2 hover:rounded-full hover:border-[#703be7]' onClick={() => github('portfolio-V2')}/>
                        <div className='flex pl-2'>
                            <img src={REACT} className='h-[36px] mr-1'/>
                            <img src={TAILWIND} className='h-[36px]'/>
                        </div>
                    </div>
                </motion.div>

                {/* API */}
                <motion.div style={{opacity: second}} className='relative sm:text-right text-4xl border-[#703be7] border-[3px] rounded-lg cursor-pointer hover:scale-110' onClick={api}>
                    <div className=''>
                        <img src={API} className='rounded-lg'/>          
                    </div>
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black rounded-lg flex items-center justify-center text-white text-opacity-0 transition-opacity duration-300 hover:text-opacity-100 hover:bg-opacity-50'>
                        <span className='text-2xl'>Live-Site</span>
                    </div>
                </motion.div>
                <motion.div  style={{opacity: second}}>
                    <p className='pb-4'>A RESTful Equipment Management API built with PHP on an AWS ec2 server, leveraging Nginx for backend support.
                    Database management is handled with phpMyAdmin. Upon query, the API responds with JSON results. 
                    </p>
                    <div className='flex items-center text-4xl divide-x-2 dark:divide-white divide-black'>
                        <FaGithub className=' mr-2 cursor-pointer hover:scale-125 hover:border-2 hover:rounded-full hover:border-[#703be7]' onClick={() => github('api')}/>
                        <div className='flex pl-2'>
                            <img src={AWS} className='h-[36px] mr-1'/>
                            <img src={PHP} className='h-[36px] mr-1'/>
                            <img src={HTML} className='h-[36px] mr-1'/>
                            <img src={CSS} className='h-[36px] mr-1'/>
                            <img src={NGINX} className='h-[36px] mr-1'/>
                            <img src={MYSQL} className='h-[36px] mr-1'/>
                        </div>
                    </div>
                </motion.div>

                {/* Portfolio-V1 */}
                <motion.div style={{opacity: third}} className='relative sm:text-right text-4xl border-[#703be7] border-[3px] rounded-lg cursor-pointer hover:scale-110' onClick={portfolio}>
                    <div className=''>
                        <img src={Portfolio} className='rounded-lg'/>          
                    </div>
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black rounded-lg flex items-center justify-center text-white text-opacity-0 transition-opacity duration-300 hover:text-opacity-100 hover:bg-opacity-50'>
                        <span className='text-2xl'>Live-Site</span>
                    </div>
                </motion.div>
                <motion.div  style={{opacity: third}}>
                    <p className='pb-4'>A portfolio website bulit with PHP on an AWS EC2 server, supported by Nginx for backend functionality. 
                        Utilized a Bootstrap template for enhanced UI. Incorporates jQuery for real-time updates of contact information stored on a phpMyAdmin database.
                    </p>
                    <div className='flex items-center text-4xl divide-x-2 dark:divide-white divide-black'>
                        <FaGithub className='mr-2 cursor-pointer hover:scale-125 hover:border-2 hover:rounded-full hover:border-[#703be7]' onClick={() => github('portfolio-V1')}/>
                        <div className='flex pl-2'>
                            <img src={AWS} className='h-[36px] mr-1'/>
                            <img src={PHP} className='h-[36px] mr-1'/>
                            <img src={HTML} className='h-[36px] mr-1'/>
                            <img src={BOOTSTRAP} className='h-[36px] mr-1'/>
                            <img src={JQUERY} className='h-[36px] mr-1'/>
                            <img src={NGINX} className='h-[36px] mr-1'/>
                            <img src={MYSQL} className='h-[36px] mr-1'/>
                        </div>
                    </div>
                </motion.div>
            </div>
            
        </div>
    </div>
  )
}

export default Projects

