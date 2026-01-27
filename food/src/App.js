import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import HeaderBottom from './components/HeaderBottom/HeaderBottom'
import AboutUs from './components/AboutUs/AboutUs'
import PromoCode from './components/PromoCode/PromoCode'
import Main from './components/Main/Main'
import Products from './components/Products/Products'
import Advantages from './Advantages/Advantages'
import ChefCook from './components/ChefCook/ChefCook'
import PopularEat from './components/PopularEat/PopularEat'
import BasketPage from './components/PagesProject/BasketPage/BasketPage'
import HowWeWork from './components/HowWeWork/HowWeWork'
import DailyMenuExample from './components/DailyMenuExample/DailyMenuExample'
import Cook from './components/Cook/Cook'
import OurService from './components/OurService/OurService'
import Subscription from './components/Subscription/Subscription'
import Contacts from './components/PagesProject/Contacts/Contacts'
import Footer from './components/Footer/Footer'

import './App.css'

function HomePage({ cart, setCart }) {
  return (
    <>
      <HeaderBottom />
      <AboutUs />
      <Products />
      <PromoCode />
      <Main />
      <Advantages />
      <ChefCook />
      <PopularEat cart={cart} setCart={setCart} />
      <HowWeWork />
      <DailyMenuExample cart={cart} setCart={setCart} />
      <Cook />
      <OurService />
      <Subscription />
      <Footer />
    </>
  )
}

function App() {
  const [cart, setCart] = useState(() => new Map())
  const cartCount = Array.from(cart.values()).reduce((sum, item) => sum + item.qty, 0)
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <BrowserRouter>
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<HomePage cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<BasketPage cart={cart} setCart={setCart} />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <button
        className="themeToggle"
        type="button"
        onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
        aria-label="Переключить тему"
      >
        {theme === 'dark' ? <FaSun /> : <FaMoon />}
      </button>
    </BrowserRouter>
  )
}

export default App
