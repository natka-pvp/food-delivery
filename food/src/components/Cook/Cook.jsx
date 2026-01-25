import s from './Cook.module.css'

export default function Cook () {
  return(
    <div className={s.cook}>
      <img
        src="https://st.depositphotos.com/1760784/1947/v/450/depositphotos_19472731-stock-illustration-cook-restaurant.jpg"
        alt="cook"
        className={s.image}
      />
      <div className={s.speech}>
        <p>Планируй свой завтрак, обед или ужин</p>
        <p>Экономь время и деньги</p>
        <p>Осторожно, это очень вкусно и вызывает привыкание!</p>
      </div>
    </div>
  )
}