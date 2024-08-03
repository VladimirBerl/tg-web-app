import styled from "./FriendsTask.module.scss";
import TaskItem from "./ui/TaskItem/TaskItem";

const tasks = [
  {
    id: 1,
    name: "Telegram User",
    icon: "/icon/gift-box.svg",
    price: "5 000",
  },
  {
    id: 2,
    name: "Premium User",
    icon: "/icon/gift-box-two.svg",
    price: "25 000",
  },
];

const FriendsTask = () => {
  return (
    <div className={styled.invite}>
      <span className={styled.title}>
        Приглашайте друзей для получения бонусов
      </span>
      <div className={`${styled["invite-wrapper"]} background-br`}>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default FriendsTask;
