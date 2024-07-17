import styled from "./TokensBurned.module.scss"

export default function TokensBurned () {
  return (
    <div className={styled.wrapper}>
      <p className={styled.title}>Сожженно токенов</p>
      <div className={styled.line}>
        <img src="/icon/fire.png" alt="fire" />
        <p>Количество <span>79831</span></p>
        <div></div>
      </div>
    </div>
  )
}