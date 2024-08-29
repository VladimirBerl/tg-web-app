import styled from "./HomeShope.module.scss";
import ModalContainer from "./ui/ModalContainer/ModalContainer";
import { Button } from "@/shared/ui/Buttom";
import { useState } from "react";

const HomeShope = () => {
  const [showModalBottomBuy, setShowModalBottomBuy] = useState(false);
  const [showModalBottomSell, setShowModalBottomSell] = useState(false);

  return (
    <>
      <div className={styled.wrapper}>
        <Button
          click={setShowModalBottomBuy}
          maxwidth="120px"
          rightItem="/icon/buy.svg"
          sizeIcon="14px"
          showborder="true"
        >
          Купить
        </Button>
        <Button
          click={setShowModalBottomSell}
          maxwidth="120px"
          rightItem="/icon/sale.svg"
          sizeIcon="14px"
          showborder="true"
        >
          Продать
        </Button>
      </div>
      <ModalContainer
        showModalBottomBuy={showModalBottomBuy}
        showModalBottomSell={showModalBottomSell}
        setShowModalBottomBuy={setShowModalBottomBuy}
        setShowModalBottomSell={setShowModalBottomSell}
      />
    </>
  );
};

export default HomeShope;
