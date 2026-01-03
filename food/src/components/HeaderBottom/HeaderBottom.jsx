import React from 'react'
import s from './HeaderBottom.module.css'

export default function HeaderBottom() {
  return (
    <div className='headerBottom'>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/017/371/600/small_2x/food-time-logo-design-template-symbol-on-white-background-illustration-vector.jpg' className={s.logo}></img> 
        <p className={s.text}>Доставка еды в офис и домой</p>
        <div>+375(29) 56-56-888 / <span className={s.phoneMe}>Перезвоните мне</span></div>
    </div>
  )
}
