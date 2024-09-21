import styled from "./TokenChart.module.scss";
import { dataChartToken } from "@/storage/storage";
import { useState } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import { Doughnut } from "react-chartjs-2";

const options = {
  plugins: {
    tooltip: {
      responsive: true,
      maintainAspectRatio: false,
    },
  },
};

export default function TokenChart() {
  const [icons, setIcon] = useState("bmt-token-chart-min");

  function toggleIcons() {
    setIcon(
      icons === "bmt-token-chart-min" ? "coin-min" : "bmt-token-chart-min"
    );
  }

  return (
    <div className={styled.wrapper}>
      <div onClick={toggleIcons} className={styled.chart}>
        <Doughnut data={dataChartToken} options={options} />
        <img src={`/icon/${icons}.png`} alt="bmt" />
      </div>
    </div>
  );
}
