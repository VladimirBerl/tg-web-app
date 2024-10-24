import InfoCoin from "../InfoCoin/InfoCoin";
import PriceCoin from "../PriceCoin/PriceCoin";
import ChartContainer from "../ChartContainer/ChartContainer";
import { Carousel } from "antd";
import { useRef } from "react";
const ChartWrapper = ({ data, color, icon, charts, colors, changeIndex }) => {
  const carouselRef = useRef(null);

  const prevSlide = () => {
    carouselRef.current.prev();
  };

  const nextSlide = () => {
    carouselRef.current.next();
  };
  return (
    <div>
      <InfoCoin nameChart={data.name} />
      <Carousel
        ref={carouselRef}
        afterChange={changeIndex}
        dots={false}
        infinite={false}
      >
        {charts.map((chart, index) => (
          <ChartContainer key={index} data={chart} color={colors[index]} />
        ))}
      </Carousel>
      <PriceCoin
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        price={data.price}
        icon={icon}
        color={color}
      />
    </div>
  );
};

export default ChartWrapper;
