import styled from "./HomeTop.module.scss";

import { headerTokenInfo } from "../../storage/storage";
import HomeTopItem from "../ui/HomeTopItem/HomeTopItem";
export default function HomeTop() {
  return (
    <div className={styled.top}>
      {headerTokenInfo.map((item) => (
        <HomeTopItem name={item.name} info={item.info} />
      ))}
    </div>
  );
}
