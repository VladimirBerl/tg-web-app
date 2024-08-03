import styled from "./PlanTopSwiper.module.scss";
import { useState } from "react";
import { Carousel } from "antd";
const PlanTopSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleBeforeChange = (from, to) => {
    setActiveIndex(to);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "22%",
  };
  return (
    <div className={styled["plan-carousel"]}>
      <h3 className={styled.title}>Plan</h3>
      <div className={styled["plan-items"]}>
        <Carousel
          {...settings}
          beforeChange={handleBeforeChange}
          style={{ textAlign: "center" }}
        >
          <div
            className={`${styled["plan-item"]} ${
              activeIndex !== 0 ? styled.inactive : ""
            }`}
          >
            <img src="/images/plan-iphone.png" alt="Iphone" />
            <span>описание задачи</span>
          </div>
          <div
            className={`${styled["plan-item"]} ${
              activeIndex !== 1 ? styled.inactive : ""
            }`}
          >
            <img src="/images/plan-iphone.png" alt="Iphone" />
            <span>описание задачи</span>
          </div>
          <div
            className={`${styled["plan-item"]} ${
              activeIndex !== 2 ? styled.inactive : ""
            }`}
          >
            <img src="/images/plan-iphone.png" alt="Iphone" />
            <span>описание задачи</span>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PlanTopSwiper;
