import HomeTop from "../../components/HomeTop/HomeTop";
import HomeIphone from "../../components/HomeIphone/HomeIphone";
import styled from "./HomePage.module.scss";
const tg = window.Telegram.WebApp
export default function HomePage() {
  function onClose() {
    tg.close()
  }
  return (
    <div>
      <HomeTop />
      <HomeIphone/>
      <button onClick={onClose}>dasd</button>
    </div>
  );
}
