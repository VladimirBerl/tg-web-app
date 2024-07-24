import styled from "./TokenTable.module.scss";
import { Carousel } from "antd";

export default function TokenTable() {
  return (
    <>
      <p>Токеномика</p>
      <div className={styled.table}>
        <Carousel infinite={false}>
          <div className={styled["swaiper-items"]}>
            <div className={styled["swaiper-item"]}>
              <table className={styled["green-table"]}>
              <thead>
                  <tr>
                    <th colSpan="2">Dudex</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>20%</td>
                  </tr>
                  <tr>
                    <td>DEXs LISTING</td>
                  </tr>
                  <tr>
                    <td>4.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styled["swaiper-items"]}>
            <div className={styled["swaiper-item"]}>
              <table className={styled["green-table"]}>
              <thead>
                  <tr>
                    <th colSpan="2">Raffles</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>30%</td>
                  </tr>
                  <tr>
                    <td>LAUNCH PAD</td>
                  </tr>
                  <tr>
                    <td>6.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styled["swaiper-items"]}>
            <div className={styled["swaiper-item"]}>
              <table className={styled["red-table"]}>
                <thead>
                  <tr>
                    <th colSpan="3">Marketing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>5%</td>
                  </tr>
                  <tr>
                    <td>DROP</td>
                  </tr>
                  <tr>
                    <td>1.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styled["swaiper-items"]}>
            <div className={styled["swaiper-item"]}>
              <table className={styled["red-table"]}>
                <thead>
                  <tr>
                    <th colSpan="3">Marketing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10%</td>
                  </tr>
                  <tr>
                    <td>STAKE</td>
                  </tr>
                  <tr>
                    <td>2.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styled["swaiper-items"]}>
            <div className={styled["swaiper-item"]}>
              <table className={styled["red-table"]}>
                <thead>
                  <tr>
                    <th colSpan="3">Marketing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>20%</td>
                  </tr>
                  <tr>
                    <td>MARKETING</td>
                  </tr>
                  <tr>
                    <td>4.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styled["swaiper-items"]}>
            <div className={styled["swaiper-item"]}>
              <table className={styled["yelow-table"]}>
                <thead>
                  <tr>
                    <th colSpan="2">ChatGPT API</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>15%</td>
                  </tr>
                  <tr>
                    <td>DEVELOPER</td>
                  </tr>
                  <tr>
                    <td>3.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
