import { useState, Suspense } from "react";
import PlanSwiper from "./ui/PlanSwiper/PlanSwiper";
import PlanTopSwiper from "./ui/PlanTopSwiper/PlanTopSwiper";
import Loading from "@/widgets/Loading/Loading";
import { useGetPlanInfoQuery } from "@/app/api";

export default function PlanPage() {
  const { data: postPlan, isLoading } = useGetPlanInfoQuery();
  const [activeIndex, setActiveIndex] = useState(0);

  if (isLoading) {
    return;
  }

  return (
    <Suspense fallback={<Loading />}>
      <PlanTopSwiper
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
      />
      <PlanSwiper postPlan={postPlan} activeIndex={activeIndex} />
    </Suspense>
  );
}
