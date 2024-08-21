import styled from "./HomeCoin.module.scss";
import Coin from "./ui/Coin/Coin";
import Farm from "./ui/Farm/Farm";

const HomeCoin = () => {
  return (
    <div className={styled.wrapper}>
      <Coin />
      <Farm />
    </div>
  );
};
export default HomeCoin;
