import styled from "./EarnPage.module.scss";
import EarnTask from "./ui/EarnTask/EarnTask";
import EarnBonuses from "./ui/EarnBonuses/EarnBonuses";
import CastomLink from "@/shared/ui/CastomLink/CastomLink";
import { Routes, Route } from "react-router-dom";

export default function EarnPage() {
  return (
    <div className={styled.earn}>
      <div className={styled["link-wrapper"]}>
        <CastomLink className={styled.link} to="/earn/task">
          Задачи
        </CastomLink>
        <CastomLink className={styled.link} to="/earn/bonuses">
          Бонусы
        </CastomLink>
      </div>
      <div>
        <Routes>
          <Route index path="task" element={<EarnTask />} />
          <Route path="bonuses" element={<EarnBonuses />} />
        </Routes>
      </div>
      <video autoPlay muted loop className={styled.video}>
        <source src="/video/galactic-bg.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
