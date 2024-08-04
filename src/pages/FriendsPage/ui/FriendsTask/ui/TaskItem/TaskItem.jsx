import styled from "./TaskItem.module.scss";

const TaskItem = ({ task }) => {
  return (
    <div className={styled["gift-box"]}>
      <div className={styled["gift-img"]}>
        <img src={task.icon} alt="gift-box" />
      </div>
      <span className={styled.task}>{task.name}</span>
      <div className={styled["price-task"]}>
        <div className={styled["coin-img"]}>
          <img src="/icon/coin-min.png" alt="coin" />
        </div>
        <span>+{task.price}</span>
      </div>
    </div>
  );
};

export default TaskItem;
