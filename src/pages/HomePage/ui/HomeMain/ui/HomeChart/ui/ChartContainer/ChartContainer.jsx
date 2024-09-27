import styled from "./ChartContainer.module.scss";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const CHART_OPTIONS = {
  plugins: {
    tooltip: {
      enabled: false,
      responsive: true,
      maintainAspectRatio: false,
    },
  },
};

const ChartContainer = ({ data, color }) => {
  const dataSet = {
    datasets: [
      {
        ...data,
        backgroundColor: color,
        borderWidth: 0,
        redraw: true,
        cutout: "90%",
      },
    ],
  };

  return (
    <div className={styled.chart}>
      <div className={styled.item}>
        <Doughnut data={dataSet} options={CHART_OPTIONS} />
      </div>
      <div className={styled.counter}>
        <span>{data.current}</span>
      </div>
    </div>
  );
};

export default ChartContainer;
