import styled from "./PlanSwiper.module.scss";
import { Carousel, ConfigProvider } from "antd";

export default function PlanSwiper() {
  return (
    <div className={styled.wrapper}>
      <div className={styled.title}>
        <p>Разработка</p>
        <img src="public/ui/filter.svg" alt="" />
      </div>
      <Carousel arrows infinite={false}>
        <div className={styled["swaiper-item"]}>1</div>
        <div className={styled["swaiper-item"]}>2</div>
        <div className={styled["swaiper-item"]}>3</div>
      </Carousel>
    </div>
  );
}
