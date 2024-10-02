import { useState } from "react";
import PlanSwiper from "./ui/PlanSwiper/PlanSwiper";
import PlanTopSwiper from "./ui/PlanTopSwiper/PlanTopSwiper";
export default function PlanPage() {
  
  return (
    <>
      <PlanTopSwiper />
      <PlanSwiper  />
    </>
  );
}
