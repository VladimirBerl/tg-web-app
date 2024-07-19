import styled from "./PlanSwiper.module.scss";
import PlanCarousel from "../PlanCarousel/PlanCarousel";

export default function PlanSwiper() {
  return (
    <div className={styled["wrapper-slider"]}>
      <PlanCarousel />
    </div>
  );
}
