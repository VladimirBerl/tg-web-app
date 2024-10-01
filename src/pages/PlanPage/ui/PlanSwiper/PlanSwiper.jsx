import styled from "./PlanSwiper.module.scss";
import PlanCarousel from "../PlanCarousel/PlanCarousel";

export default function PlanSwiper({indexSlide}) {
  return (
    <div className={styled["wrapper-slider"]}>
      <h3 className={styled.title}>CROWDSOURCING</h3>
      <PlanCarousel indexSlide={indexSlide}/>
    </div>
  );
}
