import styled from './EarnCompleted.module.scss'
import TaskItem from '../TaskItem/TaskItem'

const EarnCompleted = () => {
  return (
    <div>
      <div className={styled.wrapper}>
        <h3>Заработано</h3>
        <button className={styled["btn-friends"]}>
        <div className={styled["coin-img"]}>
          <img src="/icon/coin.svg" alt="coin" />
        </div>
        <span>+50 000</span>
      </button>
      </div>
      <TaskItem/>
    </div>
  )
}

export default EarnCompleted