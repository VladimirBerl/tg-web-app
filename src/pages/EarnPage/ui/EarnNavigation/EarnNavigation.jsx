import styled from "./EarnNavigation.module.scss";
import EarnModal from "../EarnModal/EarnModal";
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
      <div className={styled.modal}>
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
      {showPopup && (
        <EarnModal setShowModal={setShowPopup}>
          <div className={styled["modal-content"]}>
            <div className={styled["ruler-info"]}>
              <img src="/images/info.png" alt="info" />
              <span className={styled["ruler-desc"]}>
                Чтобы добавить ваше задание, отправьте запрос в телеграм
              </span>
            </div>
            <button className={styled["ruler-btn"]}>@Manager_Vip_Client</button>
          </div>
        </EarnModal>
      )}
    </>
  );
};

export default EarnNavigation;
