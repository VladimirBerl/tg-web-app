import styled from "./HeaderTopUser.module.scss";

import HomeTopModal from "../../ui/HomeTopModal/HomeTopModal";
import { useState } from "react";
import User from "./ui/User/User";
import Cub from "./ui/Cub/Cub";
import Progress from "./ui/Progress/Progress";

const HomeTopUser = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>
        <div className={styled["user-info"]}>
          <User />
          <Cub setShowModal={setShowModal} />
        </div>
        <Progress />
      </div>

      {showModal && <HomeTopModal setShowModal={setShowModal} />}
    </>
  );
};

export default HomeTopUser;
