import { useRef, useState } from 'react'
import s from './PopularEat.module.css'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'

import { CgBowl } from 'react-icons/cg'
export default function PopularEat({ cart, setCart }) {
  const sliderRef = useRef(null)
  const [favorites, setFavorites] = useState(() => new Set())

  const scrollByCard = (direction) => {
    const container = sliderRef.current
    if (!container) return

    const cardWidth = 240
    const gap = 16
    const step = cardWidth + gap
    container.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

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

  const popularEat = [
    {
      id: 1,
      img: "https://aif-s3.aif.ru/images/021/664/e59ed3a491015bf5726e165756449536.jpg",
      alt: "Русский борщ",
      title: "Русский борщ",
      weight: "350 г",
      price: "11 руб"
    }, {
      id: 2,
      img: "https://cdn2.botanichka.ru/wp-content/uploads/2025/02/kurinaya-grudka-s-pomidorami-i-syrom-na-skovorode-0.jpg",
      alt: "Запеченное филе",
      title: "Куриное филе с помидором и сыром",
      weight: "300 г",
      price: "8 руб"
    }, {
      id: 3,
      img: "https://images.gastronom.ru/LoVJjeEYXJQ3vR2Yn8WtlivB0eZ78Rtu417zEnX1mZs/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzL2IxMzU5MzRkLWI1OTAtNDQ4Zi05MjA3LWQ5YzEzM2M2ODZlNy5qcGc.webp",
      alt: "Салат Цезарь",
      title: "Салат Цезарь",
      weight: "200 г",
      price: "13 руб"
    }, {
      id: 4,
      img: "https://vkusnoff.com/img/recepty/3731/big_1500.webp", 
      alt: "Салат Оливье",
      title: "Салат Оливье",
      weight: "150 г",
      price: "10 руб"
    }, {
      id: 5,
      img: "https://img.iamcook.ru/2017/upl/recipes/cat/u6009-d578d08d04e059a9ccb4729943b5d3d8.jpg",
      alt: "Винегрет", 
      title: "Винегрет",
      weight: "200 г",
      price: "9 руб"
    }, {
      id: 6,
      img: "https://s1.eda.ru/StaticContent/Photos/120131085305/1711131155020/p_O.jpg",
      alt: "Сырники",
      title: "Сырники",
      weight: "200 г",
      price: "13 руб"
    }, {
      id: 7,
      img: "https://images.gastronom.ru/tgP3WLixmGkfBd-roh9nSP5XrR9UxqUe-PKo-e_ImZA/pr:recipe-step-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzQyNWE0N2Y2LTEzYWMtNGVmOC04MTJkLTNiODBlYTA1OTI5MC5qcGc.webp", 
      alt: "Гороховый суп",
      title: "Гороховый суп",
      weight: "300 г",
      price: "5 руб"
    }, {
      id: 8,
      img: "https://images.gastronom.ru/pjP9tZTHzYp0cfsdYOcrxvv9cmWDQroHwBu4yriugAE/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzL2NjYWU2MDc5LWE4MjAtNDgyYS05ODgwLTkyNjQ4MzZiNDI2Yi5qcGc.webp",
      alt: "Плов с курицей",
      title: "Плов с курицей",
      weight: "250 г",
      price: "11 руб"
    }, {
      id: 9,
      img: "https://sitandeat.ru/upload/resize_cache/iblock/5ae/1200_1200_2/oy7w89f2d2vdeaayqxkooka7zb5vf5t1.JPG",
      alt: "Блинчики с ветчиной и сыром",
      title: "Блинчики с ветчиной и сыром",
      weight: "250 г",
      price: "9.80 руб"
    }, {
      id: 10,
      img: "https://img.vkusvill.ru/pim/images/site_LargeWebP/0d31d835-8966-4a64-b55e-cd38551fc821.webp?1712873367.2891",
      alt: "Пюре с куриной котлетой",
      title: "Пюре с куриной котлетой",
      weight: "300 г",
      price: "13.90 руб"
    }, {
      id: 11,
      img: "https://images.gastronom.ru/Rdim2CvDkx1vHrQyIlAZ_Cg3lVYoIY4ZHSov4MywlVE/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzQ0MWUxZTQ5LWUzZGItNDFlOC1hMTUwLTkxNjgwZjEyODhlNi5qcGc.webp",
      alt: "Куриные шашлычки", 
      title: "Куриные шашлычки",
      weight: "200 г",
      price: "17 руб"
    },
  ]
  return (
    <>
      <h2 className={s.title}>Популярные блюда</h2>
      <section className={s.wrapper}>
        <div className={s.slider}>
          <button
            className={`${s.arrow} ${s.arrowLeft}`}
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Показать предыдущие блюда"
          >
            ‹
          </button>
          <div className={s.track} ref={sliderRef}>
            {popularEat.map((card) => {
              const isFavorite = favorites.has(card.id)
              const cartItem = cart.get(card.id)
              return (
                <div className={s.card} key={card.id}>
                  <span className={s.infoIcon} aria-hidden>
                   
                  </span>
                  <button
                    type="button"
                    className={`${s.heartButton} ${isFavorite ? s.heartActive : ''}`}
                    aria-pressed={isFavorite}
                    aria-label={isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}
                    onClick={() => toggleFavorite(card.id)}
                  >
                    {isFavorite ? <IoIosHeart /> : <IoIosHeartEmpty />}
                  </button>
                  <img src={card.img} alt={card.alt} className={s.cardImg} />
                  <h4 className={s.cardTitle}>{card.title}</h4>
                  <div className={s.bowlRow}>
                    <CgBowl className={s.bowlIcon} aria-hidden />
                    <span className={s.bowlText}>{card.weight}</span>
                    
                  </div>
                  <div className={s.price}>
                    <p>{card.price}</p>
                  </div>
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
              )
            })}
          </div>
          <button
            className={`${s.arrow} ${s.arrowRight}`}
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Показать следующие блюда"
          >
            ›
          </button>
        </div>
      </section>
    </>
  )
}