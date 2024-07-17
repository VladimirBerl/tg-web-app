import styled from "./PlanPage.module.scss";
import PlanSwiper from "./ui/PlanSwiper/PlanSwiper";
import PlanTopSwiper from "./ui/PlanTopSwiper/PlanTopSwiper";
export default function PlanPage() {
  return (
    <>
      <div className={styled.wrapper}>
        <h3 className={styled.title}>Plan</h3>
        <PlanTopSwiper/>
        <h3 className={styled.title}>CROWDSOURCING</h3>
        <PlanSwiper/>
      </div>
    </>
  );
}
