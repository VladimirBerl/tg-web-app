import TaskItem from "../TaskItem/TaskItemList";

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
const EarnSubscriptions = () => {
  return <TaskItem task={task} />;
};

export default EarnSubscriptions;
