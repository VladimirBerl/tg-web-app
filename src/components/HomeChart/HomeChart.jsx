import styled from "./HomeChart.module.scss";
import Counter from "../ui/Counter/Counter";

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
      responsive: true,
      maintainAspectRatio: false,
    },
  },
};

export default function HomeChart() {
  return (
    <div className={styled.wrapper}>
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
      </div>
      <div className={styled.interest}>
        <span>{dataChartOne.datasets[0].data[0]}</span>
        <span>{dataChartTwo.datasets[0].data[0]}</span>
        <span>{dataChartTree.datasets[0].data[0]}</span>
      </div>
      <div className={styled["chart-info"]}>
        <div>
          <span className={styled.price}>
            <Counter val={dataChartOne.datasets[0].price} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="18px"
              fill="#03CEA4"
            >
              <path d="M288-144v-120h-72v-72h72v-72h-72v-72h72v-336h252q85.31 0 144.65 59.28Q744-697.44 744-612.22T684.65-467.5Q625.31-408 540-408H360v72h168v72H360v120h-72Zm72-336h180q55 0 93.5-38.72t38.5-93.5q0-54.78-38.66-93.28Q594.69-744 540-744H360v264Z" />
            </svg>
          </span>
          <span>{dataChartOne.datasets[0].name}</span>
        </div>
        <div>
          <span>{dataChartTwo.datasets[0].name}</span>
        </div>
        <div>
          <span className={styled.price}>
            <Counter val={dataChartTree.datasets[0].price} />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="18px"
              fill="#03CEA4"
            >
              <path d="M288-144v-120h-72v-72h72v-72h-72v-72h72v-336h252q85.31 0 144.65 59.28Q744-697.44 744-612.22T684.65-467.5Q625.31-408 540-408H360v72h168v72H360v120h-72Zm72-336h180q55 0 93.5-38.72t38.5-93.5q0-54.78-38.66-93.28Q594.69-744 540-744H360v264Z" />
            </svg>
          </span>
          <span>{dataChartTree.datasets[0].name}</span>
        </div>
      </div>
    </div>
  );
}
