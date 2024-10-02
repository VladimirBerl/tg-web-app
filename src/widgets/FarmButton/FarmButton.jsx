import styled from "./FarmButton.module.scss";
import Coin from "./ui/Coin/Coin";
import Farm from "./ui/Farm/Farm";

const FarmButton = () => {
  return (
    <div className={styled.wrapper}>
      <Coin />
      <Farm />
    </div>
  );
};
export default FarmButton;
