import { Link, useMatch } from "react-router-dom";
import styled from "../../../pages/EarnPage/EarnPage.module.scss";

export default function CastomLink({ to, children, className }) {
  const match = useMatch({
    path: to,
  });

  return (
    <Link
      to={to}
      className={`${className} ${match ? styled["active-link"] : ""}`}
    >
      <span className={styled.text}>{children}</span>
    </Link>
  );
}
