import React, { useEffect, useRef } from 'react';
import { motion, useScroll , useMotionValueEvent, useTransform, useInView, useAnimation} from 'framer-motion'


const About = () => {
    const ref = useRef(null)
    const mainControls = useAnimation()
    const isInView = useInView(ref, {once: true})

    useEffect(() => {
        if (isInView){
            mainControls.start("visible");
        }
    }, [isInView]);

    //const { scrollYProgress } = useScroll({
     //   target: ref,
//})
    const { scrollYProgress } = useScroll()
    useMotionValueEvent(scrollYProgress, "change", (lastest) =>{
        console.log(lastest + ' about')
    });

    //const slide = useTransform(scrollYProgress, [0, .33, 1], [500, 0 , -500]);
    const leftSlide = useTransform(scrollYProgress, [0, .3636,.40,.5], [-500,0,0,500]);
    const rightSlide = useTransform(scrollYProgress, [0, .3636,.40,.5], [500,0,0,-500]);
    const upSlide = useTransform(scrollYProgress, [0, .36,.36,1], [500,0,0,-500]);
    const opacity = useTransform(leftSlide, [500, 0, -500], [0, 1, 0]);


    return (
        <div name='about' className='w-full h-screen bg-white dark:bg-[#1a1a1a] dark:text-white text-#1a1a1a'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <motion.div  style={{ x: leftSlide, opacity}} className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div  className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                </motion.div>
                <div></div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <motion.div  style={{ y: upSlide, opacity}} className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Nathan, nice to meet you. Please take a look around.</p>
                    </motion.div>
                    <motion.div  style={{ x: rightSlide, opacity}}>
                    <p>Hi. I'm Nathan, nice to meet you. Please take a look around.Hi. I'm Nathan, nice to meet you. Please take a look around.Hi. I'm Nathan, nice to meet you. Please take a look around.Hi. I'm Nathan, nice to meet you. Please take a look around.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default About;
