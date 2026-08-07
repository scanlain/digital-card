import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import { FaMoon, FaSun } from 'react-icons/fa6';

function App() {

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme])

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <>
      <button
        className='theme-toggle'
        onClick={toggleTheme}
      >
        {theme === 'light' ? <FaMoon/> : <FaSun/>}
      </button>
      <Card/>
    </>
  )
}

export default App
