import styled from "./HomeChart.module.scss";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import { Doughnut } from "react-chartjs-2";
import {
  dataChartOne,
  dataChartTwo,
  dataChartTree,
} from "../../storage/storage";
const options = {
  plugins: {
    tooltip: {
      enabled: false,
    },
  },
};

export default function HomeChart() {
  return (
    <div className={styled.wrapper}>
      <div className={styled.chart}>
        <Doughnut data={dataChartOne} options={options} />
        <Doughnut data={dataChartTwo} options={options} />
        <Doughnut data={dataChartTree} options={options} />
      </div>
      <div className={styled.interest}>
        <span>{dataChartOne.datasets[0].data[0]}</span>
        <span>{dataChartTwo.datasets[0].data[0]}</span>
        <span>{dataChartTree.datasets[0].data[0]}</span>
      </div>
      <div className={styled["chart-info"]}>
        <span>{dataChartOne.datasets[0].name}</span>
        <span>{dataChartTwo.datasets[0].name}</span>
        <span>{dataChartTree.datasets[0].name}</span>
      </div>
    </div>
  );
}
