import React, { useState } from 'react';
import { MdOutlineEmail, MdOutlineSmartphone, MdSend, MdShare} from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Contact = () => {

  const web3formKey = process.env.REACT_APP_WEB3FORM_ACCESS_KEY
  const [result, setResult] = React.useState("");
  const [showMessage, setShowMessage] = useState(false);


  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", web3formKey);

    try{
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        setShowMessage(true);

        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    }catch (error) {
      console.error("Error submitting form:", error);
      setResult("Error submitting form");
    }
  };

  return (
    <div name='contact' className=' flex justify-center items-center w-screen h-1/2 sm:h-screen bg-white dark:bg-[#1a1a1a] dark:text-white text-[#1a1a1a] overflow-hidden'>
      <div className='relative flex flex-col w-full max-w-[1000px] p-8 rounded-xl border-pink-600 dark:border-[#703be7] border-[3px] overflow-hidden' >
        <div className='absolute w-40 h-40 dark:bg-pink-600 bg-[#703be7] rounded-full -right-16 -top-16'></div>
        <div className='absolute z-0 w-40 h-40 dark:bg-pink-600 bg-[#703be7] rounded-full -left-16 -bottom-16'></div>

          <div className='z-10 grid  sm:grid-cols-2 gap-8 justify-between '>
            {/* Header */}
            <div > 
              <h1 className='text-4xl font-bold inline border-b-4 dark:border-pink-600 border-[#703be7]'>Contact</h1>
              <p className='pt-2 dark:text-[#ccd6f6] text-gray-800'>Send Me an Email</p>
            </div>
            <div></div>
            {/* Contact Methods & Socials */}
            <div className='flex flex-col justify-start pt-12 items-center space-y-4 dark:text-[#ccd6f6] text-black'>
            
              <div className='flex flex-col items-center border-[3px] border-pink-600 dark:border-[#703be7] rounded-xl pb-10 w-72 h-40'>
                <MdOutlineSmartphone className='text-4xl dark:text-pink-600 text-[#703be7]'/>
                <span className='mt-4 '>Phone:</span>
                <span className='mt-2 '>+1 (210) 430-5438</span>
              </div>
              <div className='flex flex-col items-center border-[3px] border-pink-600 dark:border-[#703be7] rounded-xl pb-10 w-72 h-40'>
                <MdShare className='text-4xl dark:text-pink-600 text-[#703be7]'/>
                <div className='flex justify-center items-center text-4xl'>
                  <BsLinkedin className=' mt-4 hover:scale-125 cursor-pointer'/>
                  <FaGithub className=' mt-4 ml-2 hover:scale-125 cursor-pointer'/>
                </div>
              </div>
            </div>
            <div className='  rounded-xl p-8'>
              {/* Form */}
              <form onSubmit={onSubmit} className='flex flex-col max-w-[600px] w-full z-10 '>
                <div className='flex flex-col'>
                    <div>
                      <input className=' focus:outline-none border-2 border-pink-600 dark:border-[#703be7] bg-transparent rounded-md p-2 mr-2 md:w-[48.81%] w-full' type="text" placeholder='First Name' name='firstName' required/>
                      <input className=' focus:outline-none border-2 border-pink-600 dark:border-[#703be7] bg-transparent rounded-md p-2 mt-4 md:w-[48.81%] w-full' type="text" placeholder='Last Name' name='lastName' />
                        
                    </div> 
                    <input className=' focus:outline-none my-4 p-2 border-2 border-pink-600 dark:border-[#703be7] bg-transparent rounded-md' type="email" placeholder='Email' name='email' required />
                    <textarea className='z-10 focus:outline-none resize-none border-2 border-pink-600 dark:border-[#703be7] bg-transparent rounded-md p-2 overflow-hidden' name="message" rows="10" placeholder='Message' required></textarea>
                </div>  
                  <button className='text-black dark:text-white border-2 border-pink-600 dark:border-[#703be7] hover:bg-[#703be7] dark:hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex justify-center items-center'>
                    <span>Send Message</span> 
                    <MdSend className=' ml-2 dark:text-pink-600 text-[#703be7]'/> 
                  </button>
                  <div className='items-center'>
                    {showMessage && (
                      <span className="fade-in-out absolute z-50 ">{result}</span>
                    )}
                  </div>
              </form>
            </div>
          </div>
          <div>
            
          </div>
      </div>
    </div>
  );
};

export default Contact;
