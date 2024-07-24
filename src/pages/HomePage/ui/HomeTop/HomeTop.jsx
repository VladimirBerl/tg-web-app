import styled from "./HomeTop.module.scss";
import HomeTopItem from "../HomeTopItem/HomeTopItem";

import HomeTopUser from "./ui/HomeTopUser/HomeTopUser";

import { headerTokenInfo } from "@/storage/storage.js";

const HomeTop = () => {
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
    </div>
  );
};

export default HomeTop;
