import s from './PromoCode.module.css'
import { useState } from 'react'

export default function PromoCode() {

  const [promoCode, setPromoCode] = useState("")
  return (
    <div className={s.promoCode}>
      <form>
        <input type="text" placeholder="Промокод" value={promoCode} onChange={(e) => setPromoCode(e.target.value)}/>
        <button>Применить</button>
      </form>
    </div>
  )
}
