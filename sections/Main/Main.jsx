import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../Header';
import s from './Main.module.css'

const Main = () => {
  const router = useRouter()
    return (
      <>
        <Header/>
        <main className={s.main}>
            <div className={`${s.main__text}`}>
                <h1 className='dark:text-white text-black  font-bold uppercase md:text-[48px] text-[32px] md:leading-[58px] leading-[39px]'>
                    Remote project work <br /> from all over the world
                </h1>
                <p className='dark:text-white text-primary-dark text-[20px] max-w-[625px] mb-[84px]' >The ability to view hundreds of current remote projects from a dozen countries in one place - simultaneously.</p>
                <button onClick={(e) => router.push('/main2')} className="font-bold text-2xl leading-6 text-white dark:bg-white dark:text-[#728EF6] bg-[#728EF6] bg-opacity-80 rounded-full py-4 px-8">Сhoose a tariff</button>
            </div>
        </main>
      </>
    )
}

export default Main