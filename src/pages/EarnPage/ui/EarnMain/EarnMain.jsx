import styled from "./EarnMain.module.scss";
import EarnTask from "../EarnTask/EarnTask";
import EarnBonuses from "../EarnBonuses/EarnBonuses";
import EarnVideo from "../EarnVideo/EarnVideo";
import EarnGame from "../EarnGame/EarnGame";
import EarnSubscriptions from "../EarnSubscriptions/EarnSubscriptions";
import EarnCompleted from "../EarnCompleted/EarnCompleted";
import { useRef, useEffect } from "react";
import { Carousel } from "antd";

const EarnMain = ({ currentSlide, setCurrentSlide, setShowModal }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const goToSlide = () => {
      carouselRef.current.goTo(currentSlide);
    };
    goToSlide();
  }, [carouselRef]);

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
    <>
      <div className={styled["wrapper-top"]}>
        <div className={styled.carousel}>
          <div
            onClick={() => setShowModal((prev) => !prev)}
            className={styled.category}
          >
            <img src="/icon/category.svg" alt="category" />
          </div>
          <Carousel
            infinite={false}
            afterChange={handleAfterChange}
            ref={carouselRef}
          >
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
              <img src="/icon/watch-w.svg" alt="" />
            </div>
            <div className={styled["carousel-btn"]}>
              <span>Завершенные</span>
              <img src="/icon/ready.svg" alt="" />
            </div>
          </Carousel>
        </div>
      </div>
      <div style={{ height: "80vh" }}>{renderComponent()}</div>
    </>
  );
};

export default EarnMain;
