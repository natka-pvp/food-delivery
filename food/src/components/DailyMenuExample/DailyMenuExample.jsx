import { useState } from 'react'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import { CgBowl } from 'react-icons/cg'
import s from './DailyMenuExample.module.css'

export default function DailyMenuExample({ cart, setCart }) {
  const [favorites, setFavorites] = useState(() => new Set())
  const dailyMenu = [{
    id: 1,
    image: "https://www.vkusnyblog.com/wp-content/uploads/2010/02/kitaiskiy-zharenyi-ris-s-kuricei-new.jpg",
    alt: "Рис с курицей и овощами",
    title: "Рис с курицей и овощами",
    weight: "250 г",
    price: "12.70 руб"

  }, {
    id: 2,
    image: "https://s0.rbk.ru/v6_top_pics/media/img/5/21/347002066059215.webp",
    alt: "Сельдь под шубой",
    title: "Салат Сельдь под шубой",
    weight: "200 г",
    price: "9.80 руб"
  }, {
    id: 3,
    image: "https://sitandeat.ru/upload/resize_cache/iblock/5ae/1200_1200_2/oy7w89f2d2vdeaayqxkooka7zb5vf5t1.JPG",
    alt: "Блинчики с ветчиной и сыром",
    title: "Блинчики с ветчиной и сыром",
    weight: "250 г",
    price: "9.80 руб"
  }, {
    id: 4,
    image: "https://s1.eda.ru/StaticContent/Photos/120131085305/1711131155020/p_O.jpg",
    alt: "Сырники",
    title: "Сырники",
    weight: "200 г",
    price: "13 руб"
  }]

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }

  const addToCart = (card) => {
    setCart((prev) => {
      const next = new Map(prev)
      const current = next.get(card.id)
      const qty = current ? current.qty + 1 : 1
      next.set(card.id, { ...card, qty })
      return next
    })
  }

  const decrementFromCart = (card) => {
    setCart((prev) => {
      const next = new Map(prev)
      const current = next.get(card.id)
      if (!current) return next

      const qty = current.qty - 1
      if (qty <= 0) {
        next.delete(card.id)
      } else {
        next.set(card.id, { ...card, qty })
      }
      return next
    })
  }

  return(
    <div className={s.container}>
      <h1 className={s.title}>Пример порционного меню на день</h1>
      <div className={s.grid}>
        {dailyMenu.map((card) => {
          const isFavorite = favorites.has(card.id)
          const cartItem = cart.get(card.id)
          return (
          <div className={s.card} key={card.id}>
            <button
              type="button"
              className={`${s.heartButton} ${isFavorite ? s.heartActive : ''}`}
              aria-pressed={isFavorite}
              aria-label={isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
              onClick={() => toggleFavorite(card.id)}
            >
              {isFavorite ? <IoIosHeart /> : <IoIosHeartEmpty />}
            </button>
            <img className={s.image} src={card.image} alt={card.alt} />
            <div className={s.cardBody}>
              <h3 className={s.cardTitle}>{card.title}</h3>
              <div className={s.bowlRow}>
                <CgBowl className={s.bowlIcon} aria-hidden />
                <span className={s.bowlText}>{card.weight}</span>
              </div>
              <p className={s.cardPrice}>{card.price}</p>
              <div className={s.orderControls}>
                <button
                  type="button"
                  className={s.orderButton}
                  onClick={() => decrementFromCart(card)}
                  aria-label={`Уменьшить количество ${card.title}`}
                  disabled={!cartItem}
                >
                  −
                </button>
                <span className={s.orderQty}>{cartItem ? cartItem.qty : 0}</span>
                <button
                  type="button"
                  className={s.orderButton}
                  onClick={() => addToCart(card)}
                  aria-label={`Добавить ${card.title} в корзину`}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )})}
      </div>
    </div>
  )
}