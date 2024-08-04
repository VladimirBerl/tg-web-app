import styled from "./ChartContainer.module.scss";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
  plugins: {
    tooltip: {
      enabled: false,
      responsive: true,
      maintainAspectRatio: false,
    },
  },
};

const ChartContainer = ({ dataChartOne, dataChartTwo, dataChartTree }) => {
  return (
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
  );
};

export default ChartContainer;
