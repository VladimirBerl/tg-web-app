import HomeTop from "../../components/HomeTop/HomeTop";
import HomeIphone from "../../components/HomeIphone/HomeIphone";
import HomeShope from "../../components/HomeShope/HomeShope";
import styled from "./HomePage.module.scss";
const tg = window.Telegram.WebApp;
export default function HomePage() {
  return (
    <div>
      <HomeTop />
      <HomeIphone />
      <HomeShope/>
    </div>
  );
}
