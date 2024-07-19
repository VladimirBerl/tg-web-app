import styled from "./HomeTop.module.scss";
import HomeTopItem from "../HomeTopItem/HomeTopItem";
import HomeModalBottom from "../HomeModalBottom/HomeModalBottom";
import HomeTopModal from './ui/HomeTopModal/HomeTopModal'

import { useState } from "react";
import { headerTokenInfo } from "@/storage/storage.js";
import { useGetUserQuery } from "@/app/api/userApi";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg";

const HomeTop = () => {
  const [showModal, setShowModal] = useState(false);
  const { data, error, isLoading } = useGetUserQuery(100);
  return (
    <div className={styled.wrapper}>
      <div className={styled["user-info"]}>
        <div className={styled.user}>
          <img src="/icon/user.svg" alt="user" />
          {isLoading ? <span>loading</span> : <span></span>}
        </div>
        <div
          className={styled.cub}
          onClick={() => {
            handlerVibrationTg()
            setShowModal((prev) => !prev);
          }}
        >
          <img src="/icon/cup.svg" alt="user" />
        </div>
      </div>
      <div className={styled.item}>
        {headerTokenInfo.map((item) => (
          <HomeTopItem
            name={item.name}
            info={item.info}
            color={item.color}
            key={item.color}
          />
        ))}
      </div>
      {showModal && (
        <HomeModalBottom setShowModalBottom={setShowModal}>
          <HomeTopModal/>
        </HomeModalBottom>
      )}
    </div>
  );
};

export default HomeTop;
