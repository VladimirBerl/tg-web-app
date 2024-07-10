import styled from "./TokenPage.module.scss";
import TokenInfoCoin from "./ui/TokenInfoCoin/TokenInfoCoin";
import TokenTable from "./ui/TokenTable/TokenTable";
import TokenChart from "./ui/TokenChart/TokenChart";
import TokensBurned from "./ui/TokensBurned/TokensBurned";
import TokenExchangePoints from "./ui/TokenExchangePoints/TokenExchangePoints";

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
        <TokenExchangePoints/>
    </div>
  );
}
