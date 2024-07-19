import styled from "./EarnPage.module.scss";
import EarnTask from "./ui/EarnTask/EarnTask";
import EarnBonuses from "./ui/EarnBonuses/EarnBonuses";
import EarnVideo from "./ui/EarnVideo/EarnVideo";
import EarnGame from "./ui/EarnGame/EarnGame";
import EarnSubscriptions from "./ui/EarnSubscriptions/EarnSubscriptions";
import EarnCompleted from "./ui/EarnCompleted/EarnCompleted";

import { useState } from "react";
import { Carousel } from "antd";

export default function EarnPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAfterChange = (current) => {
    setCurrentSlide(current);
  };

  const renderComponent = () => {
    switch (currentSlide) {
      case 0:
        return <EarnTask />;
      case 1:
        return <EarnGame />;
      case 2:
        return <EarnVideo />;
      case 3:
        return <EarnBonuses />;
      case 4:
        return <EarnSubscriptions />;
      case 5:
        return <EarnCompleted />;
      default:
        return null;
    }
  };
  return (
    <div className={styled.earn}>
      <div className={styled["wrapper-top"]}>
        <div style={{ overflow: "auto" }}>
          <Carousel infinite={false} afterChange={handleAfterChange}>
            <div className={styled["carousel-btn"]}>
              <span>Задачи</span>
              <img src="/icon/task.svg" alt="" />
            </div>
            <div className={styled["carousel-btn"]}>
              <span>Игры</span>
              <img src="/icon/game.svg" alt="" />
            </div>
            <div className={styled["carousel-btn"]}>
              <span>Видео</span>
              <img src="/icon/video.svg" alt="" />
            </div>
            <div className={styled["carousel-btn"]}>
              <span>Бонусы</span>
              <img src="/icon/bonus.svg" alt="" />
            </div>
            <div className={styled["carousel-btn"]}>
              <span>Подписки</span>
            </div>
            <div className={styled["carousel-btn"]}>
              <span>Завершенные</span>
            </div>
          </Carousel>
        </div>
      </div>
      <div>{renderComponent()}</div>
    </div>
  );
}
