import styled from "./FooterMenu.module.scss";
import CastomLink from "../ui/CastomLink/CastomLink";

export default function FooterMenu() {
  return (
    <nav className={styled.menu}>
      <CastomLink srcIcon="/newUI/token.svg" to="token">
        token
      </CastomLink>
      <CastomLink to="plan" srcIcon="/newUI/plan.svg">
        plan
      </CastomLink>
      <CastomLink to="" srcIcon="/newUI/home.svg">
        home
      </CastomLink>
      <CastomLink srcIcon="/newUI/friend.svg" to="friends">
        friend
      </CastomLink>
      <CastomLink srcIcon="/newUI/earn.svg" to="earn">
        earn
      </CastomLink>
    </nav>
  );
}
