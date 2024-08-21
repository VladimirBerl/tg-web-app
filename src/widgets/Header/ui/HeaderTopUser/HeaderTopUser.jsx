import styled from "./HeaderTopUser.module.scss";

import HomeTopModal from "../../ui/HomeTopModal/HomeTopModal";
<<<<<<< HEAD
import { useState } from "react";
import User from "./ui/User/User";
import Cub from "./ui/Cub/Cub";
import Progress from "./ui/Progress/Progress";
=======
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg";
import { useState } from "react";
>>>>>>> 34f800874e47c176a1c5fa5e63c364629c729cdb

const HomeTopUser = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>
        <div className={styled["user-info"]}>
<<<<<<< HEAD
          <User />
          <Cub setShowModal={setShowModal} />
        </div>
        <Progress />
=======
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
>>>>>>> 34f800874e47c176a1c5fa5e63c364629c729cdb
      </div>

      {showModal && <HomeTopModal setShowModal={setShowModal} />}
    </>
  );
};

export default HomeTopUser;
