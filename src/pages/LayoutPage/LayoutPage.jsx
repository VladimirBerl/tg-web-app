import styled from "./LayoutPage.module.scss";
import { Outlet } from "react-router-dom";
import FooterMenu from "../../components/FooterMenu/FooterMenu";

export default function LayoutPage() {
  return (
    <div className={styled.wrapper}>
      <Outlet />
      <FooterMenu />
    </div>
  );
}
