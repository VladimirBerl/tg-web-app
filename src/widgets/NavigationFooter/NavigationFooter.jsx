import styled from "./NavigationFooter.module.scss";
import CastomLink from "@/shared/ui/CastomLink/CastomLink";

const NavigationFooter = () => {
  return (
    <nav className={styled.menu}>
      <CastomLink srcIcon="/icon/token.svg" to="token">
        token
      </CastomLink>
      <CastomLink to="plan" srcIcon="/icon/plan.svg">
        plan
      </CastomLink>
      <CastomLink to="" srcIcon="/icon/home.svg">
        home
      </CastomLink>
      <CastomLink srcIcon="/icon/friend.svg" to="friends">
        friend
      </CastomLink>
      <CastomLink srcIcon="/icon/earn.svg" to="earn">
        earn
      </CastomLink>
    </nav>
  );
};

export default NavigationFooter;
