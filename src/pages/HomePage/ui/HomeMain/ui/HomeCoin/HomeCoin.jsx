import styled from "./HomeCoin.module.scss";
import { useState } from "react";
const HomeCoin = () => {
  const [btnText, setBthTex] = useState("Start farming");


  return (
    <div className={styled.coin}>
      <div className={styled.wrapper}>
        <div className={styled.count}>
          <img src="/icon/coin.svg" alt="coin" />
          <span>1</span>
        </div>
        <div className={styled.farm}>
          <button className={styled.button}>
            <span>{btnText}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default HomeCoin;
