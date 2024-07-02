import styled from "./FriendsListTask.module.scss";
import { Carousel } from "antd";
export default function FriendsListTask() {
  return (
    <div className={styled.task}>
      <span className={styled.title}>Дополнительные задачи</span>
      <Carousel infinite={false}>
        <div className={styled["swaiper-items"]}>
          <div className={styled["swaiper-item"]}>
            <div className={styled["task-item"]}>
              <img src="/images/gift-box.svg" alt="gift-box" />
              <div>
                <span className={styled["task-title"]}>Пригласить друга</span>
                <div className={styled["task-text"]}>
                  <img src="/newUI/coin.svg" alt="coin" />
                  <span>+5 000</span>
                </div>
                <div className={styled["task-wrapper"]}>
                  <div className={styled["task-line"]}>
                    <div></div>
                  </div>
                  <span>1/3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styled["swaiper-items"]}>
          <div className={styled["swaiper-item"]}>
            <div className={styled["task-item"]}>
              <img src="/images/gift-box.svg" alt="gift-box" />
              <div>
                <span className={styled["task-title"]}>Пригласить друга</span>
                <div className={styled["task-text"]}>
                  <img src="/newUI/coin.svg" alt="coin" />
                  <span>+5 000</span>
                </div>
                <div className={styled["task-wrapper"]}>
                  <div className={styled["task-line"]}>
                    <div></div>
                  </div>
                  <span>1/3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
