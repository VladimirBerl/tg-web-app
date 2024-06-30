import HomeTop from "../../components/HomeTop/HomeTop";
import HomeIphone from "../../components/HomeIphone/HomeIphone";
import HomeShope from "../../components/HomeShope/HomeShope";
import HomeMain from "../../components/HomeMain/HomeMain";
import styled from "./HomePage.module.scss";
export default function HomePage() {
  return (
    <div className={styled.wrapper}>
      <HomeTop />
      <div className={styled.main}>
        <HomeIphone />
        <HomeShope />
        <HomeMain />
      </div>
    </div>
  );
}
