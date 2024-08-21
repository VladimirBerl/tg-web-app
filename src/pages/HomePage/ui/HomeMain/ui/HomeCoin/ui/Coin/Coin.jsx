import styled from "./Coin.module.scss";
<<<<<<< HEAD
import { useState } from "react";
import Info from "../Info/Info";
const Coin = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className={styled.count}>
        <img
          src="/icon/coin-min.png"
          alt="coin"
          onClick={() => setModal((prev) => !prev)}
        />
        <span>1</span>
      </div>
      {modal && <Info setShowModalBottom={setModal} />}
    </>
=======

const Coin = () => {
  return (
    <div className={styled.count}>
      <img src="/icon/coin-min.png" alt="coin" />
      <span>1</span>
    </div>
>>>>>>> 34f800874e47c176a1c5fa5e63c364629c729cdb
  );
};

export default Coin;
