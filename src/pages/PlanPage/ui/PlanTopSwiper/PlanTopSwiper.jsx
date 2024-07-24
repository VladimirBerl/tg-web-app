import styled from "./PlanTopSwiper.module.scss";
import { Carousel } from "antd";
const PlanTopSwiper = () => {
  return (
    <div className={styled.wrapper}>
      <div style={{ overflow: "auto" }}>
        <Carousel style={{ textAlign: "center" }} infinite={false}>
          <div className={styled.item}>
            <img src="/images/plan-Iphone.png" alt="Iphone" />
            <span>описание задачи</span>
          </div>
          <div className={styled.item}>
            <img src="/images/plan-Iphone.png" alt="Iphone" />
            <span>
              описание
              <br /> задачи
            </span>
          </div>
          <div className={styled.item}>
            <img src="/images/plan-Iphone.png" alt="Iphone" />
            <span>
              описание
              <br /> задачи
            </span>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PlanTopSwiper;
