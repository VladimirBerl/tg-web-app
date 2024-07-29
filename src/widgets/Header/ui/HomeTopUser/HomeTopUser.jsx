import styled from "./HomeTopUser.module.scss";
import ModalBottom from "@/shared/ui/ModalBottom/ModalBottom";
import HomeTopModal from "../../ui/HomeTopModal/HomeTopModal";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg";
import { useState } from "react";

const HomeTopUser = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={styled.wrapper}>
        <div className={styled["user-info"]}>
          <div className={styled.user}>
            <img src="/icon/user.svg" alt="user" />
            <span>User</span>
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
        <ModalBottom position="-297px" setShowModalBottom={setShowModal}>
          <HomeTopModal />
        </ModalBottom>
      )}
    </>
  );
};

export default HomeTopUser;
