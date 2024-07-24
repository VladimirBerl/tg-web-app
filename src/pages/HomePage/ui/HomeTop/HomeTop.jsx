import styled from "./HomeTop.module.scss";
import HomeTopItem from "../HomeTopItem/HomeTopItem";
import HomeModalBottom from "../HomeModalBottom/HomeModalBottom";
import HomeTopModal from "./ui/HomeTopModal/HomeTopModal";
import HomeTopUser from "./ui/HomeTopUser/HomeTopUser";

import { headerTokenInfo } from "@/storage/storage.js";
import { useState } from "react";

const HomeTop = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styled.wrapper}>
      <HomeTopUser />
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
          <HomeTopModal />
        </HomeModalBottom>
      )}
    </div>
  );
};

export default HomeTop;
