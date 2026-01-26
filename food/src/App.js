import { useState } from 'react'
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
import Footer from './components/Footer/Footer'
import './App.css'

function HomePage({ cart, setCart }) {
  return (
    <>
      <HeaderBottom />
      <section className="waveSection">
        <AboutUs />
      </section>
      <section className="waveSection">
        <Products />
      </section>
      <section className="waveSection">
        <PromoCode />
      </section>
      <section className="waveSection">
        <Main />
      </section>
      <section className="waveSection">
        <Advantages />
      </section>
      <section className="waveSection">
        <ChefCook />
      </section>
      <section className="waveSection">
        <PopularEat cart={cart} setCart={setCart} />
      </section>
      <section className="waveSection">
        <HowWeWork />
      </section>
      <section className="waveSection">
        <DailyMenuExample cart={cart} setCart={setCart} />
      </section>
      <section className="waveSection">
        <Cook />
      </section>
      <section className="waveSection">
        <OurService />
      </section>
      <section className="waveSection">
        <Footer />
      </section>
    </>
  )
}

function App() {
  const [cart, setCart] = useState(() => new Map())
  const cartCount = Array.from(cart.values()).reduce((sum, item) => sum + item.qty, 0)

  return (
    <BrowserRouter>
      <Header cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<HomePage cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<BasketPage cart={cart} setCart={setCart} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
