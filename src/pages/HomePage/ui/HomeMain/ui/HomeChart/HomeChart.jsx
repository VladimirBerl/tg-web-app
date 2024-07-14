import styled from "./HomeChart.module.scss";
import HomeModal from "../../../HomeModal/HomeModal";

import { Doughnut } from "react-chartjs-2";
import { dataChartOne, dataChartTwo, dataChartTree } from "@/storage/storage";
import { useState } from "react";
const options = {
  plugins: {
    tooltip: {
      enabled: false,
      responsive: true,
      maintainAspectRatio: false,
    },
  },
};

const HomeChart = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalRub, setShowModalRub] = useState(false);

  return (
    <>
      <div className={styled.wrapper}>
        <div className={styled.info}>
          <span>{dataChartOne.datasets[0].name}</span>
          <span>{dataChartTwo.datasets[0].name}</span>
          <span>{dataChartTree.datasets[0].name}</span>
        </div>
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
        <div className={styled["info-price"]}>
          <span style={{ color: dataChartOne.datasets[0].backgroundColor[0] }}>
            <img src="/icon/coin.svg" alt="coin" />
            {dataChartOne.datasets[0].price}
          </span>
          <span style={{ color: dataChartTwo.datasets[0].backgroundColor[0] }}>
            <img style={{ width: "25px" }} src="/icon/bmt.png" alt="coin" />
            {dataChartTwo.datasets[0].price}
          </span>
          <span style={{ color: dataChartTree.datasets[0].backgroundColor[0] }}>
            <img src="/icon/rub.svg" alt="coin" />
            {dataChartTree.datasets[0].price}
          </span>
        </div>
      </div>
      <div className={styled["info-modal"]}>
        <div>
          <img
            onClick={() => {
              setShowModal((prev) => !prev);
            }}
            style={{ width: " 15px" }}
            className={styled.close}
            src="/public/images/info.png"
            alt="info"
          />
        </div>
        <div>
          <img
            onClick={() => {
              setShowModal((prev) => !prev);
            }}
            style={{ width: " 15px" }}
            className={styled.close}
            src="/public/images/info.png"
            alt="info"
          />
        </div>
        <div>
          <img
            onClick={() => {
              setShowModalRub((prev) => !prev);
            }}
            style={{ width: " 15px" }}
            className={styled.close}
            src="/public/images/info.png"
            alt="info"
          />
        </div>
      </div>
      {showModal && (
        <HomeModal setShowModal={setShowModal}>
          <div className={styled["modal-content"]}>
            <div className={styled["ruler-info"]}>
              <img src="/public/images/info.png" alt="info" />
              <span className={styled["ruler-title"]}>30%</span>
              <span className={styled["ruler-desc"]}>
                от полученной суммы пойдут для выкупа и сжигания монеты
              </span>
            </div>
            <div>
              <div className={styled.ruler}>
                <div className={styled["ruler-wrapper"]}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <div
                    style={{ left: "73px" }}
                    className={styled["target-line"]}
                  ></div>
                </div>
                <div className={styled["ruler-procent"]}>
                  <span
                    style={{ color: "#03CFA4", transform: "translateY(-3px)" }}
                  >
                    0%
                  </span>
                  <span>10%</span>
                  <span>20%</span>
                  <span
                    style={{ color: "#FF5A30", transform: "translateY(10px)" }}
                  >
                    30%
                  </span>
                  <span>40%</span>
                  <span>50%</span>
                  <span>60%</span>
                  <span>70%</span>
                  <span>80%</span>
                  <span>90%</span>
                  <span
                    style={{ color: "#03CFA4", transform: "translateY(-3px)" }}
                  >
                    100%
                  </span>
                </div>
              </div>
              <span className={styled.doc}>
                % определяется с помощью голосования
              </span>
            </div>
          </div>
        </HomeModal>
      )}
      {showModalRub && (
        <HomeModal setShowModal={setShowModalRub}>
          <div className={styled["modal-content"]}>
            <div className={styled["ruler-info"]}>
              <img src="/public/images/info.png" alt="info" />
              <span className={styled["ruler-title"]}>50%</span>
              <span className={styled["ruler-desc"]}>
                от полученной суммы пойдут для выкупа и сжигания токена BMT
              </span>
            </div>
            <div>
              <div className={styled.ruler}>
                <div className={styled["ruler-wrapper"]}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <div
                    className={styled["target-line"]}
                    style={{ left: "129px" }}
                  ></div>
                </div>
                <div className={styled["ruler-procent"]}>
                  <span
                    style={{ color: "#03CFA4", transform: "translateY(-3px)" }}
                  >
                    0%
                  </span>
                  <span>10%</span>
                  <span>20%</span>
                  <span>30%</span>
                  <span>40%</span>
                  <span
                    style={{ color: "#FF5A30", transform: "translateY(10px)" }}
                  >
                    50%
                  </span>
                  <span>60%</span>
                  <span>70%</span>
                  <span>80%</span>
                  <span>90%</span>
                  <span
                    style={{ color: "#03CFA4", transform: "translateY(-3px)" }}
                  >
                    100%
                  </span>
                </div>
              </div>
              <span className={styled.doc}>
                % определяется с помощью голосования
              </span>
            </div>
          </div>
        </HomeModal>
      )}
    </>
  );
};
export default HomeChart;
