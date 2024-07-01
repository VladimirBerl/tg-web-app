import styled from "./HomeMain.module.scss";
import HomeChart from "../HomeChart/HomeChart";
import HomeCoin from "../HomeCoin/HomeCoin";

export default function HomeMain() {
  return (
    <div className={styled.wrapper}>
      <HomeChart />
      <HomeCoin />
    </div>
  );
}
