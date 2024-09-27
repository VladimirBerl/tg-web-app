import InfoCoin from "../InfoCoin/InfoCoin";
import PriceCoin from "../PriceCoin/PriceCoin";
import ChartContainer from "../ChartContainer/ChartContainer";
import { Carousel } from "antd";
const ChartWrapper = ({ data, color, icon, charts, colors, changeIndex }) => {
  return (
    <div>
      <InfoCoin nameChart={data.name} />
      <Carousel afterChange={changeIndex} dots={false} arrows infinite={false}>
        {charts.map((chart, index) => (
          <ChartContainer data={chart} color={colors[index]} />
        ))}
      </Carousel>
      <PriceCoin price={data.price} icon={icon} color={color} />
    </div>
  );
};

export default ChartWrapper;
