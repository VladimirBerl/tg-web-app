import styled from "./PriceCoin.module.scss";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg";

const PriceCoin = ({
  dataChartOne,
  dataChartTwo,
  dataChartTree,
  setShowModalRub,
  setShowModal,
}) => {
  return (
    <div
      className={`
      ${styled.info} background-br
    `}
    >
      <span
        onClick={() => {
          handlerVibrationTg();
          setShowModal((prev) => !prev);
        }}
        style={{ color: dataChartOne.datasets[0].backgroundColor[0] }}
      >
        <img src="/icon/coin-min.png" alt="coin" />
        {dataChartOne.datasets[0].price}
      </span>
      <span
        onClick={() => {
          handlerVibrationTg();
          setShowModal((prev) => !prev);
        }}
        style={{ color: dataChartTwo.datasets[0].backgroundColor[0] }}
      >
        <img src="/icon/bmt-min.png" alt="coin" />
        {dataChartTwo.datasets[0].price}
      </span>
      <span
        onClick={() => {
          handlerVibrationTg();
          setShowModalRub((prev) => !prev);
        }}
        style={{ color: dataChartTree.datasets[0].backgroundColor[0] }}
      >
        <img src="/icon/rub-min.png" alt="coin" />
        {dataChartTree.datasets[0].price}
      </span>
    </div>
  );
};

export default PriceCoin;
