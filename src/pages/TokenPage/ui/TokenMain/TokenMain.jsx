import styled from "./TokenMain.module.scss";
import TokenInfoCoin from "../TokenInfoCoin/TokenInfoCoin";
import TokenTable from "../TokenTable/TokenTable";
import TokenChart from "../TokenChart/TokenChart";
import TokensBurned from "../TokensBurned/TokensBurned";
import TokenExchangePoints from "../TokenExchangePoints/TokenExchangePoints";

const TokenMain = () => {
  return (
    <div className={`${styled["coin-main"]} background-br`}>
      <TokenInfoCoin />
      <TokenTable />
      <TokenChart />
      <TokensBurned />
      <TokenExchangePoints />
    </div>
  );
};

export default TokenMain;
