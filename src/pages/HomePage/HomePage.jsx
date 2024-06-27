import HomeTop from "../../components/HomeTop/HomeTop";
import HomeIphone from "../../components/HomeIphone/HomeIphone";
import HomeShope from "../../components/HomeShope/HomeShope";
import HomeMain from "../../components/HomeMain/HomeMain";
import styled from "./HomePage.module.scss";
const tg = window.Telegram.WebApp;
export default function HomePage() {
  return (
    <div className={styled.wrapper}>
      <HomeTop />
      <HomeIphone />
      <HomeShope/>
      <HomeMain/>
      <video autoPlay muted loop className={styled.video}>
        <source src="/video/galactic-bg2.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
