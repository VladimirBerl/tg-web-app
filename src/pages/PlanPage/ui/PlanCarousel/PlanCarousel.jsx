import styled from "./PlanCarousel.module.scss";
import { Carousel } from "antd";
const itemCarousel = [
  {
    title: "Ликвидность",
    img: "/icon/shield.svg",
    children: [
      {
        text: "100 объявлений",
        color: "#ffd370",
        dec: "Пул ликвидности в группе в день",
      },
      {
        text: "+130%",
        color: "#03cea4",
        dec: "230 объявлений в группе в день",
      },
    ],
  },
  {
    title: "Разработка",
    img: "/icon/filter.svg",
    imgWidth: "37px",
    children: [
      {
        dec: "Сервис для покупателей / Продавцов маркетплейсов",
      },
      {
        dec: "Группа Buyer Marketplace",
      },
      {
        dec: "Бот TG Buyer - 5 модулей",
      },
    ],
  },
  {
    title: "Маркетинг",
    img: "/icon/cart.svg",
    children: [
      {
        text: "100 объявлений",
        color: "#ffd370",
        dec: "Бесплатные размещения в группу в месяц",
      },
      {
        text: "26%",
        color: "#ff5a30",
        dec: "13 объявлений в гуппе в месяц",
      },
    ],
  },
  {
    title: "Реклама",
    img: "/icon/budget.svg",
    imgWidth: "29px",
    children: [
      {
        text: "50 объявлений",
        color: "#ffd370",
        dec: "Платные размещения в группу в месяц",
      },
      {
        text: "0%",
        color: "#ff5a30",
        dec: "Объявлений в группе в месяц",
      },
    ],
  },
  {
    title: "Токен",
    img: "/icon/token-w.svg",
    imgWidth: "27px",
    children: [
      {
        text: "Токена BMT",
        color: "#ffd370",
        dec: "Использование в экосистеме Buyer Marketplace",
      },
    ],
  },
];

const PlanCarousel = ({}) => {
  return (
    <div className={styled["wrapper-slider"]}>
      {itemCarousel.map((items) => (
        <div className={styled.wrapper}>
          <div className={styled.title}>
            <p>{items.title}</p>
            <img style={{ width: items.imgWidth }} src={items.img} alt="" />
          </div>
          <Carousel infinite={false}>
            {items.children.map((item) => (
              <div className={styled["swaiper-items"]}>
                <div className={styled["swaiper-item"]}>
                  <div>
                    <p
                      style={{ color: item.color }}
                      className={styled["title-yelow"]}
                    >
                      {item.text}
                    </p>
                  </div>
                  <p>{item.dec}</p>
                  <div className={styled.group}>
                    <div>
                      <img src="/icon/question.svg" alt="question" />
                    </div>
                    <div>
                      <img src="/icon/watch-w.svg" alt="watch" />
                    </div>
                    <div>
                      <img src="/icon/email.svg" alt="email" />
                    </div>
                    <div>
                      <img src="/icon/tg-w.svg" alt="tg" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      ))}
    </div>
  );
};

export default PlanCarousel;
