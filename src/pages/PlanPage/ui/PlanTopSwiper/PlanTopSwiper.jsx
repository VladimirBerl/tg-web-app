import styled from "./PlanTopSwiper.module.scss";
import { Carousel } from "antd";
const PlanTopSwiper = () => {
  return (
    <div className={styled["plan-carousel"]}>
      <h3 className={styled.title}>Plan</h3>
      <div className={styled["plan-items"]}>
        <Carousel style={{ textAlign: "center" }} infinite={false}>
          <div className={styled["plan-item"]}>
            <img src="/images/plan-iphone.png" alt="Iphone" />
            <span>описание задачи</span>
          </div>
          <div className={styled["plan-item"]}>
            <img src="/images/plan-iphone.png" alt="Iphone" />
            <span>описание задачи</span>
          </div>
          <div className={styled["plan-item"]}>
            <img src="/images/plan-iphone.png" alt="Iphone" />
            <span>описание задачи</span>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PlanTopSwiper;
