import styled from "./HeaderTopUser.module.scss";

import HomeTopModal from "../../ui/HomeTopModal/HomeTopModal";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg";
import { useState } from "react";

const HomeTopUser = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>
        <div className={styled["user-info"]}>
          <div className={`${styled.user} background-br`}>
            <img src="/icon/user.svg" alt="user" />
            <span>User</span>
          </div>
          <div
            className={`${styled.cub} background-br`}
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
          <span className={styled.level}>Level 1</span>
        </div>
      </div>

      {showModal && <HomeTopModal setShowModal={setShowModal} />}
    </>
  );
};

export default HomeTopUser;
