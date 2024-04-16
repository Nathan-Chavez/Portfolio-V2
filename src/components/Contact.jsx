import React, { useState } from 'react';
import { MdOutlineEmail, MdOutlineSmartphone, MdSend} from "react-icons/md";
import { IoIosSend } from "react-icons/io";

const Contact = () => {

  const [result, setResult] = React.useState("");
  const [showMessage, setShowMessage] = useState(false);


  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0a44cc0c-75cd-484e-ae21-edb014411bb3");

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
    <div name='contact' className=' flex justify-center items-center w-full h-1/2 sm:h-screen bg-[#DEE4E7] dark:bg-[#1a1a1a] dark:text-white text-[#1a1a1a]'>
      <div className='relative flex flex-col w-full max-w-[1200px] p-8 rounded-xl border-pink-600 dark:border-[#703be7] border-[3px] overflow-hidden' >
        <div className='absolute w-40 h-40 dark:bg-pink-600 bg-[#703be7] rounded-full -right-16 -top-16'></div>
        <div className='absolute z-0 w-40 h-40 dark:bg-pink-600 bg-[#703be7] rounded-full -left-16 -bottom-16'></div>

          <div className='z-10 grid  sm:grid-cols-2 gap-8 justify-between '>
            {/* Header */}
            <div > 
              <h1 className='text-4xl font-bold inline border-b-4 dark:border-pink-600 border-[#703be7]'>Contact</h1>
              <p className='pt-2 text-[#ccd6f6]'>Lorem ipsum dolor sit amet d sit iusto ex quidem!</p>
            </div>
            <div></div>
            {/* Contact Methods & Socials */}
            <div className='flex flex-col justify-center items-center space-y-4 dark:text-[#ccd6f6] text-black'>
              <div className='flex flex-col items-center border-[3px] border-pink-600 dark:border-[#703be7] rounded-xl pb-10 w-72'>
                <MdOutlineEmail className='text-4xl dark:text-pink-600 text-[#703be7]'/>
                <span className=' mt-4 '>Email:</span>
                <span className=' mt-2 '>Nathanchavezpromail@gmail.com</span>
              </div>
              <div className='flex flex-col items-center border-[3px] border-pink-600 dark:border-[#703be7] rounded-xl pb-10 w-72'>
                <MdOutlineSmartphone className='text-4xl dark:text-pink-600 text-[#703be7]'/>
                <span className='mt-4 '>Phone:</span>
                <span className='mt-2 '>+1 (210) 430-5438</span>
              </div>
              <div className='flex flex-col items-center border-[3px] border-pink-600 dark:border-[#703be7] rounded-xl pb-10 w-72'>
                <MdOutlineSmartphone className='text-4xl dark:text-pink-600 text-[#703be7]'/>
                <span className='mt-4'>Phone:</span>
                <span className='mt-2'>+1 (210) 430-5438</span>
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
                  <button className='text-white border-2 border-[#703be7] hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex justify-center items-center'>
                    <span>Send Message</span> 
                    <MdSend className=' ml-2 text-pink-600'/> 
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
