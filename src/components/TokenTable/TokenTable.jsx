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
                    <th colSpan="2">Raffles - Launch / Block</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>20%</td>
                    <td>30%</td>
                  </tr>
                  <tr>
                    <td>DEXs LISTING</td>
                    <td>LAUNCH PAD</td>
                  </tr>
                  <tr>
                    <td>4.000.000</td>
                    <td>6.000.000</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td className={styled["table-footer"]} colSpan="2">
                      Dexs - Stoni.A / DeDust
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          <div className={styled["swaiper-items"]}>
            <div className={styled["swaiper-item"]}>
              <table className={styled["red-table"]}>
                <thead>
                  <tr>
                    <th colSpan="3">Реклама для продавцов</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>5%</td>
                    <td>10%</td>
                    <td>20%</td>
                  </tr>
                  <tr>
                    <td>DROP</td>
                    <td>STAKE</td>
                    <td>MARKETING</td>
                  </tr>
                  <tr>
                    <td>1.000.000</td>
                    <td>2.000.000</td>
                    <td>4.000.000</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td className={styled["table-footer"]} colSpan="3">
                      Реклама для покупателей
                    </td>
                  </tr>
                </tfoot>
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
                <tfoot>
                  <tr>
                    <td className={styled["table-footer"]} colSpan="2">
                      TG Bot / TG App
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
