import styled from "./HomeTopUser.module.scss";
import HomeModalBottom from "../../../HomeModalBottom/HomeModalBottom"
import HomeTopModal from "../../ui/HomeTopModal/HomeTopModal";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg";
import { useState } from "react";
import { useGetUserQuery } from "@/app/api/userApi";

const HomeTopUser = () => {
  const { data, error, isLoading } = useGetUserQuery(100);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <div className={styled.wrapper}>
      <div className={styled["user-info"]}>
        <div className={styled.user}>
          <img src="/icon/user.svg" alt="user" />
          {isLoading ? <span>loading</span> : <span></span>}
        </div>
        <div
          className={styled.cub}
          onClick={() => {
            handlerVibrationTg();
            setShowModal((prev) => !prev);
          }}
        >
          <img src="/icon/cup.svg" alt="user" />
        </div>
      </div>
      <div className={styled.progress}>
        <div className={styled.line}></div>
        <span>Level 1</span>
      </div>
    </div>
    {showModal && (
      <HomeModalBottom position="-297px" setShowModalBottom={setShowModal}>
        <HomeTopModal />
      </HomeModalBottom>
    )}
    </>
  );
};

export default HomeTopUser;
