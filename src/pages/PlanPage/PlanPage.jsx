import PlanSwiper from "../../components/PlanSwiper/PlanSwiper";
import styled from "./PlanPage.module.scss";
export default function PlanPage() {
  return (
    <>
      <div className={styled.wrapper}>
        <h3 className={styled.title}>Plan</h3>
      </div>
      <PlanSwiper />
    </>
  );
}
