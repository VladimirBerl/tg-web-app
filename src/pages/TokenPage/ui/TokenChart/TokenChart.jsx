import styled from "./TokenChart.module.scss";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import { Doughnut } from "react-chartjs-2";
import { dataChartToken } from "@/storage/storage";
const options = {
  plugins: {
    tooltip: {
      responsive: true,
      maintainAspectRatio: false,
    },
  },
};
export default function TokenChart() {
  return (
    <div className={styled.wrapper}>
      <div className={styled.chart}>
        <Doughnut data={dataChartToken} options={options} />
        <img src="/icon/bmt-token.svg" alt="bmt" />
      </div>
    </div>
  );
}
