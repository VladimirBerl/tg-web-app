import styled from "./TaskInfo.module.scss";

const TaskInfo = ({ tasks }) => {
  return (
    <div className={styled.info}>
      <h3>Заработано</h3>
      <button className={`${styled["btn-friends"]} background-br`}>
        <div className={styled["coin-img"]}>
          <img src="/icon/coin-min.png" alt="coin" />
        </div>
        <span>
          +
          {tasks.length > 0
            ? ((tasks.length - 1) * 5000).toLocaleString("de-DE")
            : 0}
        </span>
      </button>
    </div>
  );
};

export default TaskInfo;
