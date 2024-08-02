import styled from "./PlanPage.module.scss";
import PlanSwiper from "./ui/PlanSwiper/PlanSwiper";
import PlanTopSwiper from "./ui/PlanTopSwiper/PlanTopSwiper";
export default function PlanPage() {
  return (
    <>
      <PlanTopSwiper />
      <PlanSwiper />
    </>
  );
}
