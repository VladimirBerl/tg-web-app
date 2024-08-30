import styled from "./Coin.module.scss";
import { useState } from "react";
import Info from "../Info/Info";
import { useUser } from "@/app/context/UserContext";
import { useGetUserQuery } from "@/app/api";
const Coin = () => {
  const [modal, setModal] = useState(false);
  const { user } = useUser();
  const { data } = useGetUserQuery(user.id_telegram);
  return (
    <>
      <div className={styled.count}>
        <img
          src="/icon/coin-min.png"
          alt="coin"
          onClick={() => setModal((prev) => !prev)}
        />
        <span>{data?.count_coins.toLocaleString('de-DE')}</span>
      </div>
      {modal && <Info setShowModalBottom={setModal} />}
    </>
  );
};

export default Coin;
