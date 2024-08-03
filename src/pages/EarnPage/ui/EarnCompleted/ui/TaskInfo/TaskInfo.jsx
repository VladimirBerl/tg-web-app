import styled from "./TaskInfo.module.scss";

const TaskInfo = () => {
  return (
    <div className={styled.info}>
      <h3>Заработано</h3>
      <button className={`${styled["btn-friends"]} background-br`}>
        <div className={styled["coin-img"]}>
          <img src="/icon/coin.svg" alt="coin" />
        </div>
        <span>+50 000</span>
      </button>
    </div>
  );
};

export default TaskInfo;
