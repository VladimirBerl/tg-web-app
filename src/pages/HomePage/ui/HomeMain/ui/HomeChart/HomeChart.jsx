import styled from "./HomeChart.module.scss";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import { Doughnut } from "react-chartjs-2";
import {
  dataChartOne,
  dataChartTwo,
  dataChartTree,
} from "@/storage/storage";
const options = {
  plugins: {
    tooltip: {
      enabled: false,
      responsive: true,
      maintainAspectRatio: false,
    },
  },
};

const HomeChart = () => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.info}>
        <span>{dataChartOne.datasets[0].name}</span>
        <span>{dataChartTwo.datasets[0].name}</span>
        <span>{dataChartTree.datasets[0].name}</span>
      </div>
      <div className={styled.chart}>
        <div className={styled.item}>
          <Doughnut data={dataChartOne} options={options} />
        </div>
        <div className={styled.item}>
          <Doughnut data={dataChartTwo} options={options} />
        </div>
        <div className={styled.item}>
          <Doughnut data={dataChartTree} options={options} />
        </div>
        <div className={styled.counter}>
          <span>{dataChartOne.datasets[0].data[0]}</span>
          <span>{dataChartTwo.datasets[0].data[0]}</span>
          <span>{dataChartTree.datasets[0].data[0]}</span>
        </div>
      </div>
      <div className={styled["info-price"]}>
        <span style={{ color: dataChartOne.datasets[0].backgroundColor[0] }}>
          <img src="/icon/coin.svg" alt="coin" />
          {dataChartOne.datasets[0].price}
        </span>
        <span style={{ color: dataChartTwo.datasets[0].backgroundColor[0] }}>
          <img style={{width:"25px"}} src="/icon/bmt.png" alt="coin" />
          {dataChartTwo.datasets[0].price}
        </span>
        <span style={{ color: dataChartTree.datasets[0].backgroundColor[0] }}>
          <img src="/icon/rub.svg" alt="coin" />
          {dataChartTree.datasets[0].price}
        </span>
      </div>
    </div>
  );
};
export default HomeChart;
