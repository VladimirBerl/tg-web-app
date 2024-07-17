import styled from "./PlanSwiper.module.scss";
import { Carousel } from "antd";

export default function PlanSwiper() {
  return (
    <div className={styled["wrapper-slider"]}>
      {/* Ликвидность */}
      <div className={styled.wrapper}>
        <div className={styled.title}>
          <p>Ликвидность</p>
          <img src="/icon/shield.svg" alt="" />
        </div>
        <Carousel infinite={false}>
          <div className={styled["swaiper-items"]}>
            <div className={styled["swaiper-item"]}>
              <div>
                <p className={styled["title-yelow"]}>100 объявлений</p>
              </div>
              <p>Пул ликвидности в группе в день</p>
            </div>
          </div>
          <div className={styled["swaiper-items"]}>
            <div className={styled["swaiper-item"]}>
              <div>
                <p className={styled["title-green"]}>+130%</p>
              </div>
              <p>230 объявлений в группе в день</p>
            </div>
          </div>
        </Carousel>
      </div>
      {/* Разработка */}
      <div className={styled.wrapper}>
        <div className={styled.title}>
          <p>Разработка</p>
          <img style={{width: '37px'}} src="/icon/filter.svg" alt="" />
        </div>
        <Carousel infinite={false}>
          <div className={styled["swaiper-items"]}>
            <div className={styled["swaiper-item"]}>
              <div>
                <p>Сервис для покупателей /Продавцов маркетплейсов</p>
              </div>
              <a href="https://t.me/Buyer_Marketplace">
                BOT Buyer <img src="/icon/bottom-right.svg" alt="right" />
              </a>
            </div>
          </div>
          <div className={styled["swaiper-items"]}>
            <div className={styled["swaiper-item"]}>
              <div>
                <p>Группа Buyer Marketplace</p>
                <img src="/icon/check-round.svg" alt="check" />
              </div>
            </div>
          </div>
          <div className={styled["swaiper-items"]}>
            <div className={styled["swaiper-item"]}>
              <div>
                <p>Бот TG Buyer - 5 модулей</p>
                <img src="/icon/check-round.svg" alt="check" />
              </div>
            </div>
          </div>
          <div className={styled["swaiper-items"]}>
            <div className={styled["swaiper-item"]}>
              <div>
                <p>Чат для общения</p>
                <img src="/icon/check-round.svg" alt="check" />
              </div>
            </div>
          </div>
          <div className={styled["swaiper-items"]}>
            <div className={styled["swaiper-item"]}>
              <div>
                <p>Чат для общения</p>
                <img src="/icon/check-round.svg" alt="check" />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      {/* Маркетинг */}
      <div className={styled.wrapper}>
        <div className={styled.title}>
          <p>Маркетинг</p>
          <img src="/icon/cart.svg" alt="" />
        </div>
        <Carousel infinite={false}>
          <div className={styled["swaiper-items"]}>
            <div className={styled["swaiper-item"]}>
              <div>
                <p className={styled["title-yelow"]}>50 объявлений</p>
              </div>
              <p>Бесплатные размещение в группе в месяц</p>
            </div>
          </div>
          <div className={styled["swaiper-items"]}>
            <div className={styled["swaiper-item"]}>
              <div>
                <p className={styled["title-red"]}>+26%</p>
                <img src="/icon/close-round.svg" alt="check" />
              </div>
              <p>13 объявлений в группе в месяц</p>
            </div>
          </div>
        </Carousel>
      </div>
      {/* Реклама */}
      <div className={styled.wrapper}>
        <div className={styled.title}>
          <p>Реклама</p>
          <img style={{width: '29px'}} src="/icon/budget.svg" alt="" />
        </div>
        <Carousel infinite={false}>
          <div className={styled["swaiper-items"]}>
            <div className={styled["swaiper-item"]}>
              <div>
                <p className={styled["title-yelow"]}>50 объявлений</p>
              </div>
              <p>Бесплатные размещение в группе в месяц</p>
            </div>
          </div>
          <div className={styled["swaiper-items"]}>
            <div className={styled["swaiper-item"]}>
              <div>
                <p className={styled["title-red"]}>0%</p>
                <img src="/icon/close-round.svg" alt="check" />
              </div>
              <p>Объявлений в группе в месяц</p>
            </div>
          </div>
        </Carousel>
      </div>
      {/* токен */}
      <div className={styled.wrapper}>
        <div className={styled.title}>
          <p>Токен</p>
          <img style={{width: '27px'}} src="/icon/token-w.svg" alt="" />
        </div>
        <Carousel infinite={false}>
          <div className={styled["swaiper-items"]}>
            <div className={styled["swaiper-item"]}>
              <div>
                <p className={styled["title-green"]}>Токена BMT</p>
              </div>
              <p>Использование в экосистеме Byer Marketplace</p>
            </div>
          </div>
          <div className={styled["swaiper-items"]}>
            <div className={styled["swaiper-item"]}>
              <div>
                <p className={styled["title-red"]}>0%</p>
                <img src="/icon/close-round.svg" alt="check" />
              </div>
              <p>Пока нет информации</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
