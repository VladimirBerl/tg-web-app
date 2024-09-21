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

const ChartContainer = ({ data }) => {
  return (
    <div className={styled.chart}>
      {data.map((item, index) => (
        <div key={index} className={styled.item}>
          <Doughnut data={item} options={options} />
        </div>
      ))}
      <div className={styled.counter}>
        {data.map((item, index) => (
          <span key={index}>{item.datasets[0].current}</span>
        ))}
      </div>
    </div>
  );
};

export default ChartContainer;
