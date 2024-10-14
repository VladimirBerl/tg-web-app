import styled from "./PlanSwiper.module.scss";
import PlanCarousel from "../PlanCarousel/PlanCarousel";

export default function PlanSwiper({ postPlan, activeIndex }) {
  return (
    <div className={styled["wrapper-slider"]}>
      <h3 className={styled.title}>CROWDSOURCING</h3>
      <PlanCarousel postPlan={postPlan} activeIndex={activeIndex} />
    </div>
  );
}
