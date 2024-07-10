import styled from "./HomeTop.module.scss";
import HomeTopItem from "../HomeTopItem/HomeTopItem";
import { headerTokenInfo } from "@/storage/storage.js";

import { useGetUserQuery } from "@/app/api/userApi";

const HomeTop = () => {
  const { data, error, isLoading } = useGetUserQuery(100)
  return (
    <div className={styled.wrapper}>
      <div className={styled["user-info"]}>
        <div className={styled.user}>
          <img src="src/shared/assets/icon/user.svg" alt="user" />
          {isLoading ? <span>loading</span> : <span></span>}
        </div>
        <div className={styled.cub}>
          <img src="src/shared/assets/icon/cup.svg" alt="user" />
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
    </div>
  );
};

export default HomeTop;
