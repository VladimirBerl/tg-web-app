import styled from "./Navigation.module.scss";
import { Carousel } from "antd";

const Navigation = ({ setShowModal, handleAfterChange, carouselRef }) => {
  return (
    <div className={`${styled.navigation} carousel `}>
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
  );
};

export default Navigation;
