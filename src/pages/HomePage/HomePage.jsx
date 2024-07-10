import HomeTop from "./ui/HomeTop/HomeTop";
import HomeIphone from "./ui/HomeIphone/HomeIphone";
import HomeShope from "./ui/HomeShope/HomeShope";
import HomeMain from "./ui/HomeMain/HomeMain";
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
