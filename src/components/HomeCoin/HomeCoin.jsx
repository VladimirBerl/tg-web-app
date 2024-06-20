import styled from "./HomeCoin.module.scss";
import { user } from "../../storage/storage";
import { useState, useEffect } from "react";
import CountData from "../ui/CounterData/CounterData";
import { CustomTime } from "../../storage/castom";

export default function HomeCoin() {
  const [btnText, setBthTex] = useState("Start farming");
  const [stateFarm, setStateFarm] = useState(false);
  const [countFarm, setCountFarm] = useState(user.farm);

  function handlerBtn() {
    if (!stateFarm) {
      setStateFarm((prev) => !prev);
      setBthTex("Farming");
    }
  }
  return (
    <div className={styled.wrapper}>
      <div className={styled.count}>
        <img src="/images/coin.png" alt="coin" />
        <span>{user.coin.toLocaleString("de-DE")}</span>
      </div>
      <div className={styled.farm}>
        <button style={{backgroundColor: stateFarm && '#787A80',color: stateFarm && '#9D9D9D'}} onClick={handlerBtn}>
          {btnText}
          {stateFarm && (
            <sapn style={{ marginLeft: "10px" }}>
              {countFarm.toLocaleString("de-DE")}
            </sapn>
          )}
        </button>
        {stateFarm && (
          <>
            <div className={styled.time}>
              {<CountData finishTime={CustomTime(0, 0, 60)}/>}
              s
            </div>
          </>
        )}
      </div>
    </div>
  );
}
