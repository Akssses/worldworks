import Header from "../sections/Header"
import React, { useState, useEffect } from 'react';
import { BsCheck } from "react-icons/bs";
import { ImFire } from "react-icons/im";

const Orders = () => {
    const [text, setText] = useState('Created a website design by type hh.ru . But the previous performer refused to make a mobile version and make edits.You will need to increase margins on all pages from the edges, and adapt it to the mobile version.');
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 668);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
      const abbreviatedText = text.slice(0, 70) + '...';
    
    return (
        <div>
            <Header/>
            <div className="md:px-[95px] px-[35px] mt-[70px]">
                <div className="md:p-[40px] p-[28px] bg-white dark:bg-[#262c49] rounded-[25px]">
                    <div className="flex justify-between items-center">
                        <div className="flex  md:gap-[24px] gap-2 items-center">
                            <img src="./images/ava.png" alt="avatar" />
                            <div className="text-black dark:text-white">
                                <p className="">Agmap Burziev</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-[24px] dark:text-white">21.000RUB</h1>
                            <p className="text-[#858585] md:block hidden">Price</p>
                        </div>
                    </div>
                    <h1 className="text-[24px] dark:text-white font-bold mt-[36px]">Website design in Figma</h1>
                    <div className="text-[18px] dark:text-white">
                        {isMobile ? (
                            <p>{abbreviatedText}</p>
                        ) : (
                            <p>{text}</p>
                        )}
                    </div>
                    <div className="flex justify-between mt-[20px]">
                        <button className="text-[#FFB648] underline ">More</button>
                        <span className="dark:text-white">Date: 21.11.23</span>
                    </div>
                </div>
                <div className="md:p-[40px] p-[28px] bg-white dark:bg-[#262c49] rounded-[25px] mt-[35px]">
                    <div className="flex justify-between items-center">
                        <div className="flex md:gap-[24px] gap-2 items-center">
                            <img src="./images/ava.png" alt="avatar" />
                            <div className="text-black dark:text-white">
                                <p className="">Agmap Burziev</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5">
                            <span className='text-white p-[10px] rounded-[12px] md:flex hidden  items-center gap-2 bg-[#FFB648A1] font-bold'><ImFire/>Hot</span>
                            <div>
                                <h1 className="font-bold text-[24px] dark:text-white">21.000RUB</h1>
                                <p className="text-[#858585] md:block hidden">Price</p>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-[24px] dark:text-white font-bold mt-[36px]">Website design in Figma</h1>
                    <div className="text-[18px] dark:text-white">
                        {isMobile ? (
                            <p>{abbreviatedText}</p>
                        ) : (
                            <p>{text}</p>
                        )}
                    </div>
                    <div className="flex justify-between mt-[20px]">
                        <button className="text-[#FFB648] underline ">More</button>
                        <span className="dark:text-white">Date: 21.11.23</span>
                    </div>
                </div>
                <div className="md:p-[40px] p-[28px] bg-white dark:bg-[#262c49] rounded-[25px] mt-[35px]">
                    <div className="flex justify-between items-center">
                        <div className="flex  md:gap-[24px] gap-2 items-center">
                            <img src="./images/ava.png" alt="avatar" />
                            <div className="text-black dark:text-white">
                                <p className="">Agmap Burziev</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-[24px] dark:text-white">21.000RUB</h1>
                            <p className="text-[#858585] md:block hidden">Price</p>
                        </div>
                    </div>
                    <h1 className="text-[24px] dark:text-white font-bold mt-[36px]">Website design in Figma</h1>
                    <div className="text-[18px] dark:text-white">
                        {isMobile ? (
                            <p>{abbreviatedText}</p>
                        ) : (
                            <p>{text}</p>
                        )}
                    </div>
                    <div className="flex justify-between mt-[20px]">
                        <button className="text-[#FFB648] underline ">More</button>
                        <span className="dark:text-white">Date: 21.11.23</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders