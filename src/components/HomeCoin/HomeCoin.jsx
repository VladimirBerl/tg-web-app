import styled from "./HomeCoin.module.scss";
import CountData from "../ui/CounterData/CounterData";
import { user } from "../../storage/storage";
import { useEffect, useState } from "react";
import { CustomTime } from "../../storage/castom";
import { useSelector } from "react-redux";

export default function HomeCoin() {
  const { token, tokenFarmTimeCount, tokenFarmTime } = useSelector(
    (state) => state.user
  );
  const [btnText, setBthTex] = useState("Start farming");
  const [stateFarm, setStateFarm] = useState(false);


  const [farmTime, setFarmTime] = useState(0);
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
        <span>{token.toLocaleString("de-DE")}</span>
      </div>
      <div className={styled.farm}>
        <button
          style={{
            backgroundColor: stateFarm && "#787A80",
            color: stateFarm && "#9D9D9D",
          }}
          onClick={handlerBtn}
        >
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
              {<CountData finishTime={CustomTime(0, 0, farmTime)} />}s
            </div>
          </>
        )}
      </div>
    </div>
  );
}
