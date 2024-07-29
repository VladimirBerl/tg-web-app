import styled from "./HomePage.module.scss";
import HomeIphone from "./ui/HomeIphone/HomeIphone";
import HomeShope from "./ui/HomeShope/HomeShope";
import HomeMain from "./ui/HomeMain/HomeMain";
export default function HomePage() {
  return (
      <div className={styled.wrapper}>
        <HomeIphone />
        <HomeShope />
        <HomeMain />
      </div>
  );
}
