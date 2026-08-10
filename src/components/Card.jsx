import Header from "./Header"
import '../App.css'
import MainContent from "./MainContent"
import ViewResume from "./ViewResume"
import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa6';

const Card = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className="card">
      <button
        className='theme-toggle'
        onClick={toggleTheme}
      >
        {theme === 'light' ? <FaMoon/> : <FaSun/>}
      </button>
        <Header/>
        <MainContent/>
        <ViewResume/>
    </div>
  )
}

export default Card