import styles from "./PlanCarousel.module.scss";
import Slide from "./ui/Slide/Slide";
import { newMount } from "@/shared/lib/getMonth.js";

const PlanCarousel = ({ activeIndex, postPlan }) => {
  const generatorColor = (current, destination) => {
    return current >= destination ? "#8ECF03" : "#DF7E7E";
  };

  const getPercent = (current, destination) => {
    return ((current / destination) * 100).toFixed(2);
  };

  const planSlideItems = [
    {
      id: 1,
      title: "Ликвидность",
      decs: `Пул ликвидности в группе за ${newMount}`,
      img: "/icon/shield.svg",
      type: "text",
      sliders: [
        {
          id: 1,
          color: generatorColor(
            postPlan[0].data.current,
            postPlan[0].data.need
          ),
          percent: getPercent(postPlan[0].data.current, postPlan[0].data.need),
          presently: postPlan[0].data.current,
          destination: postPlan[0].data.need,
        },
        {
          id: 2,
          color: generatorColor(postPlan[0].data.current, 5000),
          percent: getPercent(postPlan[0].data.current, 5000),
          presently: postPlan[0].data.current,
          destination: 5000,
        },
        {
          id: 3,
          color: generatorColor(postPlan[0].data.current, 10000),
          percent: getPercent(postPlan[0].data.current, 10000),
          presently: postPlan[0].data.current,
          destination: 10000,
        },
        {
          id: 3,
          color: generatorColor(postPlan[0].data.current, 20000),
          percent: getPercent(postPlan[0].data.current, 20000),
          presently: postPlan[0].data.current,
          destination: 20000,
        },
      ],
    },
    {
      id: 2,
      title: "Маркетинг",
      decs: `Бесплатные размещения в группе за ${newMount}`,
      img: "/icon/cart.svg",
      type: "text",
      imgWidth: "24px",
      sliders: [
        {
          id: 1,
          color: generatorColor(
            postPlan[2].data.current,
            postPlan[2].data.need
          ),
          percent: getPercent(postPlan[2].data.current, postPlan[2].data.need),
          presently: postPlan[2].data.current,
          destination: postPlan[2].data.need,
        },
        {
          id: 2,
          color: generatorColor(postPlan[2].data.current, 4900),
          percent: getPercent(postPlan[2].data.current, 4900),
          presently: postPlan[2].data.current,
          destination: 4900,
        },
        {
          id: 3,
          color: generatorColor(postPlan[2].data.current, 9000),
          percent: getPercent(postPlan[2].data.current, 9000),
          presently: postPlan[2].data.current,
          destination: 9000,
        },
        {
          id: 3,
          color: generatorColor(postPlan[2].data.current, 15000),
          percent: getPercent(postPlan[2].data.current, 15000),
          presently: postPlan[2].data.current,
          destination: 15000,
        },
      ],
    },
    {
      id: 3,
      title: "Реклама",
      decs: `Платные размещения постов в группе за ${newMount}`,
      img: "/icon/budget.svg",
      imgWidth: "29px",
      type: "text",
      sliders: [
        {
          id: 1,
          color: generatorColor(
            postPlan[1].data.current,
            postPlan[1].data.need
          ),
          percent: getPercent(postPlan[1].data.current, postPlan[1].data.need),
          presently: postPlan[1].data.current,
          destination: postPlan[1].data.need,
        },
        {
          id: 2,
          color: generatorColor(postPlan[1].data.current, 100),
          percent: getPercent(postPlan[1].data.current, 100),
          presently: postPlan[1].data.current,
          destination: 100,
        },
        {
          id: 3,
          color: generatorColor(postPlan[1].data.current, 1000),
          percent: getPercent(postPlan[1].data.current, 1000),
          presently: postPlan[1].data.current,
          destination: 1000,
        },
        {
          id: 3,
          color: generatorColor(postPlan[1].data.current, 5000),
          percent: getPercent(postPlan[1].data.current, 5000),
          presently: postPlan[1].data.current,
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

  return (
    <div className={styles.wrapper}>
      {planSlideItems.map(
        ({ title, img, imgWidth, id, sliders, type, decs }) => (
          <div key={id} className={styles.wrapper}>
            <div className={styles.title}>
              <p>{title}</p>
              {img && <img style={{ width: imgWidth }} src={img} alt={title} />}
            </div>
            <Slide
              activeIndex={activeIndex}
              sliders={sliders}
              type={type}
              decs={decs}
            />
          </div>
        )
      )}
    </div>
  );
};

export default PlanCarousel;
