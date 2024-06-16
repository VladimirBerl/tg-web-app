import styled from "./HomeMain.module.scss";
import HomeChart from "../HomeChart/HomeChart";

export default function HomeMain() {
  return (
    <div className={styled.wrapper}>
      <HomeChart />
    </div>
  );
}
