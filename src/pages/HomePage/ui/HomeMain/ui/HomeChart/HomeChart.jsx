import styled from "./HomeChart.module.scss";
import { useState } from "react";
import { useGetCountPostsByTypeQuery } from "@/app/api";
import ChartWrapper from "./ui/ChartWrapper/ChartWrapper";

const CHART_ICONS = {
  0: "",
  1: "/icon/bmt-min.png",
  2: "/icon/coin-min.png",
  3: "/icon/rub-min.png",
  4: "/icon/star.png",
  5: "",
};

const CHART_COLOR = {
  1: ["#3F4CE3", "#111973"],
  0: ["#C1A130", "#965C16"],
  2: ["#088E35", "#064225"],
  3: ["#C1A130", "#965C16"],
  4: ["#3F4CE3", "#111973"],
  5: ["#088E35", "#064225"],
};

const HomeChart = () => {
  const { data: charts } = useGetCountPostsByTypeQuery();
  const [index, setIndex] = useState(0);

  const changeIndex = (index) => {
    setIndex(index);
  };
  return (
    <div className={`${styled.wrapper} background-br`}>
      <ChartWrapper
        changeIndex={changeIndex}
        charts={charts}
        data={charts[index]}
        colors={CHART_COLOR}
        color={CHART_COLOR[index]}
        icon={CHART_ICONS[index]}
      />
    </div>
  );
};
export default HomeChart;
