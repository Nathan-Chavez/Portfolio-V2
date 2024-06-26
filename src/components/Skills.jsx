import React from 'react';
import Marquee from "react-fast-marquee";
import AWS from '../assets/icons/aws.png';
import CSS from '../assets/icons/css.png';
import REACT from '../assets/icons/react.png';
import TAILWIND from '../assets/icons/tailwind.png';
import HTML from '../assets/icons/html.png';
import JS from '../assets/icons/javascript.png';
import PHP from '../assets/icons/php.png';
import NGINX from '../assets/icons/nginx.png'
import MYSQL from '../assets/icons/mysql.png'
import JQUERY from '../assets/icons/jquery.png'
import BOOTSTRAP from '../assets/icons/bootstrap.png'


const imageUrls = [  REACT, JS, HTML, CSS, TAILWIND, AWS, PHP, NGINX, MYSQL, JQUERY, BOOTSTRAP];
const iconNames = ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'AWS', 'PHP', 'NGINX', 'MYSQL', 'JQUERY', 'BOOTSTRAP'];

const Skills = () => {
  return (
    <div className="w-screen h-[25vh] bg-[#DEE4E7] dark:bg-[#1a1a1a] overflow-x-hidden no-scrollbar overflow-hidden">
      <div className="relative overflow-x-hidden max-w-[1500px] mx-auto px-8 flex flex-col justify-center items-start h-full">

            <Marquee speed={35} className='overflow-x-hidden'>
                <div className="flex justify-between items-center">
                    {imageUrls.map((url, index) => (
                    <div className="flex flex-col items-center justify-center h-full max-w-[150px] mr-28" key={index}>
                    <img src={url} alt={iconNames[index]+'.png'} />
                    </div>
                    ))}
                </div>
            </Marquee>
        </div>
    </div>
  );
};

export default Skills;
