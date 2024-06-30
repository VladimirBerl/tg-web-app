import styled from "./HomeCoin.module.scss";
import { user } from "../../storage/storage";
import { useState } from "react";

export default function HomeCoin() {
  const [btnText, setBthTex] = useState("Start farming");
  const [countFarm, setCountFarm] = useState(user.farm);

  return (
    <div className={styled.wrapper}>
      <div className={styled.count}>
        <img src="/newUI/coin.svg" alt="coin" />
        <span>{user.coin.toLocaleString("de-DE")}</span>
      </div>
      <div className={styled.farm}>
        <button className={styled.button}>
          <span>{btnText}</span>
        </button>
      </div>
    </div>
  );
}
