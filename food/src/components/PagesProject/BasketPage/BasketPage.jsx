import { Link } from 'react-router-dom'
import s from './BasketPage.module.css'

const parsePrice = (value) => {
  if (!value) return 0
  const normalized = value.replace(',', '.').replace(/[^\d.]/g, '')
  const parsed = Number.parseFloat(normalized)
  return Number.isNaN(parsed) ? 0 : parsed
}

export default function BasketPage({ cart, setCart }) {
  const items = cart ? Array.from(cart.values()) : []
  const isEmpty = items.length === 0
  const total = items.reduce((sum, item) => sum + parsePrice(item.price) * item.qty, 0)

  const incrementItem = (item) => {
    if (!setCart) return
    setCart((prev) => {
      const next = new Map(prev)
      const current = next.get(item.id)
      const qty = current ? current.qty + 1 : 1
      next.set(item.id, { ...item, qty })
      return next
    })
  }

  const decrementItem = (item) => {
    if (!setCart) return
    setCart((prev) => {
      const next = new Map(prev)
      const current = next.get(item.id)
      if (!current) return next
      const qty = current.qty - 1
      if (qty <= 0) {
        next.delete(item.id)
      } else {
        next.set(item.id, { ...item, qty })
      }
      return next
    })
  }

  return (
    <div className={s.backdrop}>
      <section className={s.wrapper}>
        <Link to="/" className={s.closeButton} aria-label="Закрыть корзину">
          ×
        </Link>
        <div className={s.headerRow}>
          <h1 className={s.title}>Корзина</h1>
          {!isEmpty && (
            <button
              type="button"
              className={s.clearButton}
              onClick={() => setCart(new Map())}
            >
              Очистить корзину
            </button>
          )}
        </div>
        {isEmpty ? (
          <div className={s.empty}>
            <p className={s.emptyText}>Ваша корзина пуста</p>
            <Link to="/" className={s.backButton}>
              Вернуться на главную страницу
            </Link>
          </div>
        ) : (
          <div className={s.content}>
            <div className={s.list}>
              {items.map((item) => (
                <div className={s.item} key={item.id}>
                  <img
                    className={s.itemImage}
                    src={item.img || item.image}
                    alt={item.alt}
                  />
                  <div className={s.itemInfo}>
                    <h3 className={s.itemTitle}>{item.title}</h3>
                    <p className={s.itemMeta}>{item.weight}</p>
                    <div className={s.itemRow}>
                      <div className={s.qtyControls}>
                        <button
                          type="button"
                          className={s.qtyButton}
                          onClick={() => decrementItem(item)}
                          aria-label={`Уменьшить количество ${item.title}`}
                        >
                          −
                        </button>
                        <span className={s.qtyValue}>{item.qty}</span>
                        <button
                          type="button"
                          className={s.qtyButton}
                          onClick={() => incrementItem(item)}
                          aria-label={`Увеличить количество ${item.title}`}
                        >
                          +
                        </button>
                      </div>
                      <span className={s.itemPrice}>{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={s.summary}>
              <span>Итого:</span>
              <strong>{total.toFixed(2)} руб</strong>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}