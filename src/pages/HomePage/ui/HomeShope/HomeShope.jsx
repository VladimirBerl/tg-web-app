import styled from "./HomeShope.module.scss";
import ModalContainer from "./ui/ModalContainer/ModalContainer";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg";
import { useState } from "react";

const HomeShope = () => {
  const [showModalBottomBuy, setShowModalBottomBuy] = useState(false);
  const [showModalBottomSell, setShowModalBottomSell] = useState(false);

  return (
    <>
      <div className={styled.wrapper}>
        <button
          onClick={() => {
            handlerVibrationTg();
            setShowModalBottomBuy((prev) => !prev);
          }}
          className={`${styled.button} background-br`}
        >
          <span>Купить</span>
          <div>
            <img src="/icon/buy.svg" alt="icon" />
          </div>
        </button>
        <button
          onClick={() => {
            handlerVibrationTg();
            setShowModalBottomSell((prev) => !prev);
          }}
          className={`${styled.button} background-br`}
        >
          <span>Продать</span>
          <div>
            <img src="/icon/sale.svg" alt="icon" />
          </div>
        </button>
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
