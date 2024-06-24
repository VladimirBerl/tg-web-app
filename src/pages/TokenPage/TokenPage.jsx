import styled from "./TokenPage.module.scss";
import TokenInfoCoin from "../../components/TokenInfoCoin/TokenInfoCoin";
import TokenTable from "../../components/TokenTable/TokenTable";
import TokenChart from "../../components/TokenChart/TokenChart";
import TokensBurned from "../../components/TokensBurned/TokensBurned";
import ExchangePoints from "../../components/ExchangePoints/ExchangePoints";

export default function TokenPage() {
  return (
    <div className={styled.wrapper}>
      <button className={styled.button}>
        BUY
        <div>
          <img src="/ui/top-right.svg"></img>
        </div>
      </button>
      <div className={styled["coin-wrapper"]}>
        <TokenInfoCoin />
        <TokenTable />
      </div>
        <TokenChart />
        <TokensBurned/>
        <ExchangePoints/>
    </div>
  );
}
