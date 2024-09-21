import styled from "./HomeChart.module.scss";
import ModalContainer from "./ui/ModalContainer/ModalContainer";
import InfoCoin from "./ui/InfoCoin/InfoCoin";
import PriceCoin from "./ui/PriceCoin/PriceCoin";
import ChartContainer from "./ui/ChartContainer/ChartContainer";
import { useState, useEffect } from "react";
import { useGetCountPostsByTypeQuery } from "@/app/api";

const dataChartOne = {
  datasets: [
    {
      name: "Посты за монеты",
      price: "1450",
      data: [40, 60],
      backgroundColor: ["#C1A130", "#965C16"],
      borderWidth: 0,
      redraw: true,
      cutout: "90%",
    },
  ],
};
const dataChartTwo = {
  datasets: [
    {
      name: "Посты за токены",
      price: "750",
      data: [90, 10],
      backgroundColor: ["#3F4CE3", "#111973"],
      borderWidth: 0,
      redraw: true,
      cutout: "90%",
    },
  ],
};
const dataChartTree = {
  datasets: [
    {
      name: "Посты за рубли",
      price: "1450",
      data: [50, 50],
      backgroundColor: ["#088E35", "#064225"],
      borderWidth: 0,
      redraw: true,
      cutout: "90%",
    },
  ],
};

const HomeChart = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalRub, setShowModalRub] = useState(false);
  const [transData, setTransData] = useState([]);
  const { data, error, isLoading } = useGetCountPostsByTypeQuery();

  function transformation(dataSet) {
    return dataSet.slice(1).map((item) => ({
      datasets: [
        {
          ...item,
          backgroundColor: ["#088E35", "#064225"],
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
    <>
      <div className={`${styled.wrapper} background-br`}>
        <InfoCoin data={transData} />
        <ChartContainer data={transData} />
        <PriceCoin
          setShowModal={setShowModal}
          setShowModalRub={setShowModalRub}
          dataChartOne={dataChartOne}
          dataChartTwo={dataChartTwo}
          dataChartTree={dataChartTree}
        />
      </div>
      <ModalContainer
        showModal={showModal}
        setShowModal={setShowModal}
        showModalRub={showModalRub}
        setShowModalRub={setShowModalRub}
      />
    </>
  );
};
export default HomeChart;
