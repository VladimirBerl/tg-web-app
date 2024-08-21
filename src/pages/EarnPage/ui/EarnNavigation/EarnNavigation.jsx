import styled from "./EarnNavigation.module.scss";
import ModalContent from "./ui/ModalContent/ModalContent";
import CategoryItem from "./ui/CategoryItem/CategoryItem";
import { useState } from "react";

const category = [
  {
    id: 4,
    name: "Подписки",
    img: "/icon/watch-w.svg",
    count: 0,
  },
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
    id: 5,
    name: "Завершенные",
    img: "/icon/ready.svg",
    count: 0,
  },
];

const EarnNavigation = ({ setCurrentSlide, setShowModal }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAfterChange = (current) => {
    setShowModal((prev) => !prev);
    setCurrentSlide(current);
  };

  return (
    <>
      <div className={styled.navigation}>
        <div className={styled.top}>
          <div
            onClick={() => setShowPopup((prev) => !prev)}
            className={styled.add}
          >
            <img src="/icon/add.svg" alt="add" />
          </div>
          <div onClick={() => setShowModal((prev) => !prev)}>
            <img src="/icon/category.svg" alt="category" />
          </div>
          <span>Категории</span>
        </div>
        {category.map((task) => (
          <CategoryItem
            key={task.id}
            task={task}
            handleAfterChange={handleAfterChange}
          />
        ))}
      </div>
      <ModalContent showPopup={showPopup} setShowPopup={setShowPopup} />
    </>
  );
};

export default EarnNavigation;
