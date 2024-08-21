import styled from "./InfoCoin.module.scss";

const InfoCoin = ({ dataChartOne, dataChartTwo, dataChartTree }) => {
  return (
    <div className={`${styled.info} background-br`}>
      <span>{dataChartOne.datasets[0].name}</span>
      <span>{dataChartTwo.datasets[0].name}</span>
      <span>{dataChartTree.datasets[0].name}</span>
    </div>
  );
};

export default InfoCoin;
