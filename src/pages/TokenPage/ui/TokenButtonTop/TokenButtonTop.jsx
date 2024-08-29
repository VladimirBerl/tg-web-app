import styled from "./TokenButtonTop.module.scss";
import { Button } from "@/shared/ui/Buttom";

const TokenButtonTop = () => {
  return (
    <div className={styled.wrapper}>
      <Button
        leftItem="/icon/wallet.svg"
        maxwidth="46.6px"
        showborder="true"
        padding="5px 5px"
      />
      <Button
        gradient="true"
        sizetext="20px"
        rightItem="/icon/shop.svg"
        maxwidth="130px"
        showborder="true"
        padding="0px 15px"
      >
        BUY
      </Button>
    </div>
  );
};

export default TokenButtonTop;
