import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Link from "next/link"
import Button from "../components/Button";
import s from './Header.module.css'

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [lan, setLan] = useState(false)

  const onClickLan = () => {
    setLan(!lan)
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if(!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    if(currentTheme === 'dark') {
      return (
        <Button className="bg-gray-200 "
          onClick={() => setTheme('light')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        </Button>
      )
    } else {
      return (
        <Button className="bg-gray-200"
          onClick={() => setTheme('dark')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </Button>
      )
    }

  }

  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img className="lg:w-[149px] w-[70px]" src="./images/logo.svg" alt="logo"/>
        <div className={s.logo__text}>
          <h1 className="font-bold lg:text-[48px] text-[20px] leading-[75%] lg:-translate-x-[115px] -translate-x-[60px]  dark:text-white -tracking-[0.14em]">WORLDS</h1>
          <h2 className="font-bold lg:text-[48px] text-[20px] leading-[85%] lg:-translate-x-[105px] -translate-x-[50px] dark:text-white tracking-[0.em]">WORKS</h2>
        </div>
      </div>
      <div className={s.header__button}>
        {renderThemeChanger()}
        {
          lan 
          ? (<button className="dark:text-white text-black" onClick={onClickLan}>En</button>) 
          : (<button className="dark:text-white text-black" onClick={onClickLan}>Ru</button>)
        }
        
      </div>
    </header>
  )
}

export default Header