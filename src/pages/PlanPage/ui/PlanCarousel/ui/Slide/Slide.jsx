import { Carousel } from "antd";
import { GroupPlan } from "../GroupPlan/GroupPlan";
import { useEffect, useRef } from "react";

const Slide = ({ sliders, type, decs, activeIndex }) => {
  const sliderRef = useRef(null);
  useEffect(() => {
    sliderRef.current.goTo(activeIndex);
  }, [activeIndex]);

  return (
    <Carousel swipe={false} dots={false} ref={sliderRef}>
      {sliders.map((slide) => (
        <GroupPlan key={slide.id} slide={slide} type={type} decs={decs} />
      ))}
    </Carousel>
  );
};

export default Slide;
