import styled from "./HomeCoin.module.scss";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg";
import { useState } from "react";

const HomeCoin = () => {
  const [btnText, setBthTex] = useState("Start farming");

  return (
    <div className={styled.coin}>
      <div className={styled.wrapper}>
        <div className={styled.count}>
          <img src="/icon/coin-btn.png" alt="coin" />
          <span>1</span>
        </div>
        <div onClick={handlerVibrationTg} className={styled.farm}>
          <button className={styled.button}>
            <span>{btnText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default HomeCoin;
