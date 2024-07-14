import styled from "./EarnPage.module.scss";
import EarnTask from "./ui/EarnTask/EarnTask";
import EarnBonuses from "./ui/EarnBonuses/EarnBonuses";
import CastomLink from "@/shared/ui/CastomLink/CastomLink";
import EarnVideo from "./ui/EarnVideo/EarnVideo";
import EarnGame from "./ui/EarnGame/EarnGame";

import { Routes, Route } from "react-router-dom";
import { Carousel } from "antd";
export default function EarnPage() {
  return (
    <div className={styled.earn}>
      <div className={styled["wrapper-top"]}>
        <div className={styled.category}>
          <img src="/public/icon/category.svg" alt="category" />
        </div>
        <div className={styled["link-wrapper"]}>
          <Carousel infinite={false}>
            <CastomLink className={styled.link} to="/earn/task">
              Задачи
            </CastomLink>
            <CastomLink className={styled.link} to="/earn/bonuses">
              Бонусы
            </CastomLink>
            <CastomLink className={styled.link} to="/earn/video">
              Видео
            </CastomLink>
            <CastomLink className={styled.link} to="/earn/game">
              Игры
            </CastomLink>
          </Carousel>
        </div>
      </div>
      <div>
        <Routes>
          <Route index path="task" element={<EarnTask />} />
          <Route path="bonuses" element={<EarnBonuses />} />
          <Route path="video" element={<EarnVideo />} />
          <Route path="game" element={<EarnGame />} />
        </Routes>
      </div>
    </div>
  );
}
