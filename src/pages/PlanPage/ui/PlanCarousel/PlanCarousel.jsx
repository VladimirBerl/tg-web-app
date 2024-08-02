import styles from "./PlanCarousel.module.scss";
import ModalBottom from "@/shared/ui/ModalBottom/ModalBottom";
import { Carousel } from "antd";
import { useState } from "react";

const planSlideItems = [
  {
    id: 1,
    title: "Ликвидность",
    img: "/icon/shield.svg",
    sliders: [
      {
        id: 1,
        task: "100 объявлений",
        color: "#ffd370",
        dec: "Пул ликвидности в группе в день",
      },
      {
        id: 2,
        task: "+130%",
        color: "#03cea4",
        dec: "230 объявлений в группе в день",
      },
    ],
  },
  {
    id: 2,
    title: "Разработка",
    img: "/icon/filter.svg",
    imgWidth: "37px",
    sliders: [
      {
        id: 1,
        dec: "Сервис для покупателей / Продавцов маркетплейсов",
      },
      {
        id: 2,
        dec: "Группа Buyer Marketplace",
      },
      {
        id: 3,
        dec: "Бот TG Buyer - 5 модулей",
      },
    ],
  },
  {
    id: 3,
    title: "Маркетинг",
    img: "/icon/cart.svg",
    sliders: [
      {
        id: 1,
        task: "100 объявлений",
        color: "#ffd370",
        dec: "Бесплатные размещения в группу в месяц",
      },
      {
        id: 2,
        task: "26%",
        color: "#ff5a30",
        dec: "13 объявлений в гуппе в месяц",
      },
    ],
  },
  {
    id: 4,
    title: "Реклама",
    img: "/icon/budget.svg",
    imgWidth: "29px",
    sliders: [
      {
        id: 1,
        task: "50 объявлений",
        color: "#ffd370",
        dec: "Платные размещения в группу в месяц",
      },
      {
        id: 2,
        task: "0%",
        color: "#ff5a30",
        dec: "Объявлений в группе в месяц",
      },
    ],
  },
  {
    id: 5,
    title: "Токен",
    img: "/icon/token-w.svg",
    imgWidth: "27px",
    sliders: [
      {
        id: 1,
        task: "Токена BMT",
        color: "#ffd370",
        dec: "Использование в экосистеме Buyer Marketplace",
      },
    ],
  },
];

const PlanCarousel = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <ModalBottom setShowModalBottom={setShowModal}>123</ModalBottom>
      )}
      <div className={styles.wrapper}>
        {planSlideItems.map(({ title, img, imgWidth, sliders, id }) => (
          <div key={id} className={styles.wrapper}>
            <div className={styles.title}>
              <p>{title}</p>
              <img style={{ width: imgWidth }} src={img} alt={title} />
            </div>
            <Carousel>
              {sliders.map(({ task, color, dec, id }) => (
                <div key={id} className={styles["swaiper-items"]}>
                  <div className={styles["swaiper-item"]}>
                    <p style={{ color }}>{task}</p>
                    <p>{dec}</p>
                    <div className={styles.group}>
                      <div onClick={() => setShowModal((prev) => !prev)}>
                        <img src="/icon/question.svg" alt="question" />
                      </div>
                      <div onClick={() => setShowModal((prev) => !prev)}>
                        <img src="/icon/watch-w.svg" alt="watch" />
                      </div>
                      <div onClick={() => setShowModal((prev) => !prev)}>
                        <img src="/icon/email.svg" alt="email" />
                      </div>
                      <div onClick={() => setShowModal((prev) => !prev)}>
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
    </>
  );
};

export default PlanCarousel;
