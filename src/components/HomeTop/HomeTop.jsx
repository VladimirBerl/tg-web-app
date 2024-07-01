import styled from "./HomeTop.module.scss";
import HomeTopItem from "../ui/HomeTopItem/HomeTopItem";
import { headerTokenInfo } from "../../storage/storage";
import { useSelector } from "react-redux";
export default function HomeTop() {
  const { name } = useSelector((state) => state.user);
  return (
    <div className={styled.wrapper}>
      <div className={styled["user-info"]}>
        <div className={styled.user}>
          <img src="/newUI/user.svg" alt="user" />
          {name ? <span>{name}</span> : <span>NFT_PRO</span>}
        </div>
        <div className={styled.cub}>
          <img src="/newUI/cup.svg" alt="user" />
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
}
