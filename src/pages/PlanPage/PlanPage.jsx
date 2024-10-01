import { useState } from "react";
import PlanSwiper from "./ui/PlanSwiper/PlanSwiper";
import PlanTopSwiper from "./ui/PlanTopSwiper/PlanTopSwiper";
export default function PlanPage() {
  const [indexSlide, setIndexSlide] = useState(0);
  console.log(indexSlide);
  
  return (
    <>
      <PlanTopSwiper setIndexSlide={setIndexSlide} />
      <PlanSwiper indexSlide={indexSlide} />
    </>
  );
}
