import styled from "./TaskItem.module.scss";

const task = [
  {
    id: 1,
    title: "Подписаться на Buyer",
    icon: "/icon/tg-earn.svg",
    price: "5 000",
  },
  {
    id: 2,
    title: "Подписаться на Buyer",
    icon: "/icon/tg-earn.svg",
    price: "5 000",
  },
  {
    id: 3,
    title: "Подписаться на Buyer",
    icon: "/icon/tg-earn.svg",
    price: "5 000",
  },
  {
    id: 4,
    title: "Подписаться на Buyer",
    icon: "/icon/tg-earn.svg",
    price: "5 000",
  },
];

const TaskItem = () => {
  return task.map((item) => (
    <div key={item.id} className={`${styled.task} background-br`}>
      <img className={styled.telegram} src={item.icon} alt="icon" />
      <div className={styled["task-info"]}>
        <span>{item.title}</span>
        <div className={styled["price-task"]}>
          <div className={styled["coin-img"]}>
            <img src="/icon/coin.svg" alt="coin" />
          </div>
          <span>+{item.price}</span>
        </div>
      </div>
      <img className={styled.ready} src="/icon/ready.svg" alt="ready" />
    </div>
  ));
};

export default TaskItem;
