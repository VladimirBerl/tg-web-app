import styles from "./PlanCarousel.module.scss";
import { GroupPlan } from "./ui/GroupPlan/GroupPlan";
import { Carousel } from "antd";

const planSlideItems = [
  {
    id: 1,
    title: "Ликвидность",
    decs: "Пул ликвидности в группе в день",
    img: "/icon/shield.svg",
    type: "text",
    sliders: [
      {
        id: 1,
        color: "#8ECF03",
        percent: "+440%",
        presently: 5400,
        destination: 1000,
      },
      {
        id: 2,
        color: "#8ECF03",
        percent: "+9%",
        presently: 5400,
        destination: 5000,
      },
      {
        id: 3,
        color: "#DF7E7E",
        percent: "-46%",
        presently: 5400,
        destination: 10000,
      },
      {
        id: 3,
        color: "#DF7E7E",
        percent: "-70%",
        presently: 5400,
        destination: 20000,
      },
    ],
  },
  {
    id: 2,
    title: "Маркетинг",
    decs: "Бесплатные размещения в группе в месяц",
    img: "/icon/cart.svg",
    type: "text",
    imgWidth: "24px",
    sliders: [
      {
        id: 1,
        color: "#8ECF03",
        percent: "+365%",
        presently: 5400,
        destination: 990,
      },
      {
        id: 2,
        color: "#8ECF03",
        percent: "+10%",
        presently: 5400,
        destination: 4900,
      },
      {
        id: 3,
        color: "#DF7E7E",
        percent: "-40%",
        presently: 5400,
        destination: 9000,
      },
      {
        id: 3,
        color: "#DF7E7E",
        percent: "-90%",
        presently: 5400,
        destination: 15000,
      },
    ],
  },
  {
    id: 3,
    title: "Реклама",
    decs: "Платные размещения постов в группе в месяц",
    img: "/icon/budget.svg",
    imgWidth: "29px",
    type: "text",
    sliders: [
      {
        id: 1,
        color: "#DF7E7E",
        percent: "-60%",
        presently: 10,
        destination: 50,
      },
      {
        id: 2,
        color: "#DF7E7E",
        percent: "-90%",
        presently: 10,
        destination: 100,
      },
      {
        id: 3,
        color: "#DF7E7E",
        percent: "-900%",
        presently: 10,
        destination: 1000,
      },
      {
        id: 3,
        color: "#DF7E7E",
        percent: "-4900%",
        presently: 10,
        destination: 5000,
      },
    ],
  },
  {
    id: 4,
    title: "Разработка",
    decs: "Сервис для покупателей и продавцов маркетплейсов TG Bueyr - Mini App",
    img: "/icon/filter.svg",
    type: "icon",
    imgWidth: "32px",
    sliders: [
      {
        id: 1,
        icon: ["plan/tg.png", "plan/pc.png", "plan/robot.png"],
      },
      {
        id: 2,
        icon: [
          "plan/tg.png",
          "plan/pc.png",
          "plan/robot.png",
          "plan/gpt.png",
          "plan/client.png",
        ],
      },
      {
        id: 3,
        icon: [
          "plan/tg.png",
          "plan/pc.png",
          "plan/robot.png",
          "plan/gpt.png",
          "plan/client.png",
        ],
      },
      {
        id: 4,
        icon: [
          "plan/tg.png",
          "plan/pc.png",
          "plan/robot.png",
          "plan/gpt.png",
          "plan/client.png",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Дизайн",
    decs: "Дизайн Mini App - TG Buyer",
    type: "icon",
    sliders: [
      {
        id: 1,
        icon: ["plan/folder.png", "plan/figma.png"],
      },
      {
        id: 2,
        icon: ["plan/folder.png", "plan/figma.png"],
      },
      {
        id: 3,
        icon: ["plan/folder.png", "plan/figma.png"],
      },
      {
        id: 4,
        icon: ["plan/folder.png", "plan/figma.png"],
      },
    ],
  },
  {
    id: 6,
    title: "Токен",
    decs: "Токена BMT",
    img: "/icon/token-w.svg",
    type: "icon",
    imgWidth: "27px",
    sliders: [
      {
        id: 1,
        icon: ["plan/ton.png", "/icon/bmt-min.png"],
      },
      {
        id: 2,
        icon: ["plan/ton.png", "/icon/bmt-min.png"],
      },
      {
        id: 3,
        icon: ["plan/ton.png", "/icon/bmt-min.png"],
      },
      {
        id: 4,
        icon: ["plan/ton.png", "/icon/bmt-min.png"],
      },
    ],
  },
];

const PlanCarousel = () => {
  return (
    <div className={styles.wrapper}>
      {planSlideItems.map(
        ({ title, img, imgWidth, id, sliders, type, decs }) => (
          <div key={id} className={styles.wrapper}>
            <div className={styles.title}>
              <p>{title}</p>
              {img && <img style={{ width: imgWidth }} src={img} alt={title} />}
            </div>
            <Carousel>
              {sliders.map((slide) => (
                <GroupPlan
                  key={slide.id}
                  slide={slide}
                  type={type}
                  decs={decs}
                />
              ))}
            </Carousel>
          </div>
        )
      )}
    </div>
  );
};

export default PlanCarousel;
