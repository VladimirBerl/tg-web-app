import { useState } from "react";
import PlanSwiper from "./ui/PlanSwiper/PlanSwiper";
import PlanTopSwiper from "./ui/PlanTopSwiper/PlanTopSwiper";
export default function PlanPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <PlanTopSwiper
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
      />
      <PlanSwiper activeIndex={activeIndex} />
    </>
  );
}
