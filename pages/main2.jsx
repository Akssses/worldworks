import s from '../styles/Main2.module.css'
import {BsCheck} from 'react-icons/bs'
import {ImFire} from 'react-icons/im'
import Link from 'next/link'
import Header from '../sections/Header'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Main2 = () => {
  const router = useRouter()

    return (
        <main className={s.main}>
            <div className=''>
            <Header />
            <div className={s.container__main}>
                <h1 className='dark:text-white md:text-center font-bold uppercase md:text-[48px] text-[32px] mt-[30px] md:leading-[58px] leading-[39px]'>
                        Remote project work <br className='md:block hidden' /> from all over the world
                </h1>
                <p className='dark:text-white md:text-center text-[24px] leading-[29px] mt-[18px]'>The ability to view hundreds of current remote projects from <br className='md:block hidden'/> a dozen countries in one place - simultaneously.</p>
            </div>
                <div className='mt-[45px] lg:flex items-center lg:gap-[25px] justify-center'>
                    <div className="tarif__block bg-white dark:bg-[#7994f826]">
                        <div className='flex items-center justify-between'>
                            <span className='demo'>Demo</span>
                            <h2 className='text-[14px] text-[#A8BAFF] font-bold'>Free</h2>
                        </div>
                        <div className='flex justify-between items-center mt-[28px]'>
                            <h1 className='font-bold dark:text-white'>Standart project</h1>
                            <div className='checkbox'></div>
                        </div>
                    </div>

                    <div className="tarif__block bg-white dark:bg-[#7994f826]">
                        <div className='flex items-center justify-between'>
                            <span className='demo'>Lite</span>
                            <h2 className='text-[14px] text-[#A8BAFF] font-bold'>39 RUB/month</h2>
                        </div>
                        <div className='flex justify-between items-center mt-[28px]'>
                            <h1 className='font-bold dark:text-white'>+160% project</h1>
                            <span className='p-[5px] bg-[#7994f8] opacity-80 rounded-full' src="./images/check.svg" alt="img"><BsCheck size={20} color="white"/></span>
                        </div>
                    </div>

                    <div className="tarif__block bg-white dark:bg-[#7994f826]">
                        <div className='flex items-center justify-between'>
                            <span className='text-white p-[10px] rounded-[12px] bg-[#FFB648A1] flex items-center gap-[3px] font-bold'><ImFire/>Standart</span>
                            <h2 className='text-[14px] text-[#A8BAFF] font-bold'>99 RUB/month</h2>
                        </div>
                        <div className='flex justify-between items-center mt-[28px]'>
                            <h1 className='font-bold dark:text-white'>+200% project</h1>
                            <div className='checkbox'></div>
                        </div>
                    </div>
                </div>
                <div className='flex md:justify-center pl-[35px] md:pl-0 mt-[70px] md:pb-[200px] pb-[35px]'>
                    <button onClick={(e) => router.push('/orders')} className="font-bold text-2xl leading-6 text-white dark:bg-white dark:text-[#728EF6] bg-[#1a2035] rounded-full py-4 px-8">Сhoose a tariff</button>
                </div>
            </div>
        </main>
    )
}

export default Main2