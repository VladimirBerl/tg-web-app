import styled from "./HomeChart.module.scss";
import InfoCoin from "./ui/InfoCoin/InfoCoin";
import PriceCoin from "./ui/PriceCoin/PriceCoin";
import ChartContainer from "./ui/ChartContainer/ChartContainer";
import { useState, useEffect } from "react";
import { useGetCountPostsByTypeQuery } from "@/app/api";

const FAKE_DATA = [
  {
    datasets: [
      {
        name: "Посты за токены",
        price: 750,
        data: [26, 74],
        current: 8,
        need: 30,
        backgroundColor: ["#C1A130", "#965C16"],
        borderWidth: 0,
        redraw: true,
        cutout: "90%",
      },
    ],
  },
  {
    datasets: [
      {
        name: "Посты за монеты",
        price: 10000,
        data: [10, 90],
        current: 6,
        need: 60,
        backgroundColor: ["#3F4CE3", "#111973"],
        borderWidth: 0,
        redraw: true,
        cutout: "90%",
      },
    ],
  },
  {
    datasets: [
      {
        name: "Посты за рубли",
        price: 1000,
        data: [24, 76],
        current: 12,
        need: 50,
        backgroundColor: ["#088E35", "#064225"],
        borderWidth: 0,
        redraw: true,
        cutout: "90%",
      },
    ],
  },
];

const CHART_COLOR = {
  0: ["#C1A130", "#965C16"],
  1: ["#3F4CE3", "#111973"],
  2: ["#088E35", "#064225"],
};

const HomeChart = () => {
  const [transData, setTransData] = useState([]);
  const { data, isLoading } = useGetCountPostsByTypeQuery();

  function transformation(dataSet) {
    return dataSet.slice(1).map((item, index) => ({
      datasets: [
        {
          ...item,
          backgroundColor: CHART_COLOR[index],
          borderWidth: 0,
          redraw: true,
          cutout: "90%",
        },
      ],
    }));
  }

  useEffect(() => {
    if (!isLoading) {
      setTransData(transformation(data));
    }
  }, [isLoading]);

  return (
    <div className={`${styled.wrapper} background-br`}>
      <InfoCoin data={data ? transData : FAKE_DATA} />
      <ChartContainer data={data ? transData : FAKE_DATA} />
      <PriceCoin data={data ? transData : FAKE_DATA} />
    </div>
  );
};
export default HomeChart;
