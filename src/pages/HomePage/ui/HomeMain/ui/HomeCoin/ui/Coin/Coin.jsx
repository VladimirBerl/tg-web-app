import styled from "./Coin.module.scss";
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
  );
};

export default Coin;
