import styled from "./NavigationFooter.module.scss";
import CastomLink from "@/shared/ui/CastomLink/CastomLink";

const NavigationFooter = () => {
  return (
    <nav className={styled.menu}>
      <CastomLink srcIcon="src/shared/assets/icon/token.svg" to="token">
        token
      </CastomLink>
      <CastomLink to="plan" srcIcon="src/shared/assets/icon/plan.svg">
        plan
      </CastomLink>
      <CastomLink to="" srcIcon="src/shared/assets/icon/home.svg">
        home
      </CastomLink>
      <CastomLink srcIcon="src/shared/assets/icon/friend.svg" to="friends">
        friend
      </CastomLink>
      <CastomLink srcIcon="src/shared/assets/icon/earn.svg" to="earn">
        earn
      </CastomLink>
    </nav>
  );
};

export default NavigationFooter;
