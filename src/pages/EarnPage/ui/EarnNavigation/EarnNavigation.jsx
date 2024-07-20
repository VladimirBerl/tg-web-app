import styled from "./EarnNavigation.module.scss";

const category = [
  {
    id: 0,
    name: "Задачи",
    img: "/icon/task.svg",
    count: 0,
  },
  {
    id: 1,
    name: "Игры",
    img: "/icon/game.svg",
    count: 0,
  },
  {
    id: 2,
    name: "Видео",
    img: "/icon/video.svg",
    count: 0,
  },
  {
    id: 3,
    name: "Бонусы",
    img: "/icon/bonus.svg",
    count: 0,
  },
  {
    id: 4,
    name: "Подписки",
    count: 0,
  },
  {
    id: 5,
    name: "Завершенные",
    count: 0,
  },
];

const EarnNavigation = ({ setCurrentSlide, setShowModal }) => {
  const handleAfterChange = (current) => {
    setShowModal((prev) => !prev);
    setCurrentSlide(current);
  };
  return (
    <div className={styled.modal}>
      <div className={styled.top}>
        <div className={styled.add}>
          <img src="/icon/add.svg" alt="add" />
        </div>
        <div onClick={()=> setShowModal((prev) => !prev)} className={styled.add}>
          <img src="/public/icon/category.svg" alt="category" />
        </div>
        <span>Категории</span>
      </div>
      <div className={styled.categgory}>
        {category.map((task) => (
          <div
            className={styled.task}
            key={task.id}
            onClick={() => handleAfterChange(task.id)}
          >
            <div>
              <span>{task.count}</span>
              <span>{task.name}</span>
            </div>
            {task.img && <img src={task.img} alt="icon" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EarnNavigation;
