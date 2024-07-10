import styled from "./HomeMain.module.scss";
import HomeChart from "./ui/HomeChart/HomeChart";
import HomeCoin from "./ui/HomeCoin/HomeCoin";

export default function HomeMain() {
  return (
    <div className={styled.wrapper}>
      <HomeChart />
      <div className={styled.coin}>
        <HomeCoin />
      </div>
    </div>
  );
}
