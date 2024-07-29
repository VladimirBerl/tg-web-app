import styled from "./TaskItem.module.scss";

const TaskItem = () => {
  return (
    <>
      <div className={styled.task}>
        <img
          className={styled.telegram}
          src="/icon/tg-earn.svg"
          alt="tg-earn"
        />
        <div className={styled["task-info"]}>
          <span>Подписаться на Buyer</span>
          <div className={styled["price-task"]}>
            <div className={styled["coin-img"]}>
              <img src="/icon/coin.svg" alt="coin" />
            </div>
            <span>+5 000</span>
          </div>
        </div>
        <img className={styled.ready} src="/icon/ready.svg" alt="ready" />
      </div>
      <div className={styled.task}>
        <img
          className={styled.telegram}
          src="/icon/tg-earn.svg"
          alt="tg-earn"
        />
        <div className={styled["task-info"]}>
          <span>Подписаться на Buyer</span>
          <div className={styled["price-task"]}>
            <div className={styled["coin-img"]}>
              <img src="/icon/coin.svg" alt="coin" />
            </div>
            <span>+5 000</span>
          </div>
        </div>
        <img className={styled.ready} src="/icon/ready.svg" alt="ready" />
      </div>
    </>
  );
};

export default TaskItem;
