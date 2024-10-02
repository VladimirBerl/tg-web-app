import styles from "./CarouselPhoneList.module.scss";
import { Carousel } from "antd";
import { useState } from "react";

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "22%",
};

const plan = [
  {
    id: 0,
    title: "Этап 1",
    tasks: [
      {
        description: "Количество участников в приложение",
        target: 1000,
        complited: true,
      },
      {
        description: "Количество продавцов на площадке",
        target: 100,
        complited: true,
      },
      {
        description: "Бесплатных постов",
        target: 990,
        complited: true,
      },
      {
        description: "Платных постов",
        target: 10,
        complited: true,
      },
    ],
  },
  {
    id: 1,
    title: "Этап 2",
    tasks: [
      {
        description: "Количество участников в приложение",
        target: 10000,
        complited: false,
      },
      {
        description: "Количество продавцов на площадке",
        target: 300,
        complited: false,
      },
      {
        description: "Бесплатных постов",
        target: 4900,
        complited: false,
      },
      {
        description: "Платных постов",
        target: 100,
        complited: false,
      },
      {
        description: "Выполненных заданий",
        target: 100000,
        complited: false,
      },
    ],
  },
  {
    id: 2,
    title: "Этап 3",
    tasks: [
      {
        description: "Количество участников в приложение",
        target: 100000,
        complited: false,
      },
      {
        description: "Количество продавцов на площадке",
        target: 2000,
        complited: false,
      },
      {
        description: "Бесплатных постов",
        target: 9000,
        complited: false,
      },
      {
        description: "Платных постов",
        target: 1000,
        complited: false,
      },
      {
        description: "Выполненных заданий",
        target: 1000000,
        complited: false,
      },
    ],
  },
  {
    id: 3,
    title: "Этап 4",
    tasks: [
      {
        description: "Количество участников в приложение",
        target: 1000000,
        complited: false,
      },
      {
        description: "Количество продавцов на площадке",
        target: 10000,
        complited: false,
      },
      {
        description: "Бесплатных постов",
        target: 15000,
        complited: false,
      },
      {
        description: "Платных постов",
        target: 5000,
        complited: false,
      },
      {
        description: "Выполненных заданий",
        target: 10000000,
        complited: false,
      },
    ],
  },
];

const CarouselPhoneList = ({ setActiveIndex, activeIndex }) => {
  const handleBeforeChange = (from, to) => {
    setActiveIndex(to);
  };

  return (
    <Carousel {...settings} beforeChange={handleBeforeChange}>
      {plan.map((task, index) => (
        <div
          key={task.id}
          className={`${styles["plan-item"]} ${
            activeIndex !== index ? styles.inactive : ""
          }`}
        >
          <img src="/images/plan-iphone.png" alt="Iphone" />
          <div className={styles.plan}>
            <h4>
              {task.title}
              {task.tasks.every((t) => t.complited) ? (
                <img src="icon/check-mark.png" alt="" />
              ) : (
                <img src="icon/develop.png" alt="" />
              )}
            </h4>
            <div className={styles["decs-wrapper"]}>
              {task.tasks.map((subTask, subIndex) => (
                <div key={subIndex} className={styles.decs}>
                  <span>{subTask.description}</span>
                  <span>
                    {subTask.target}
                    {subTask.complited && (
                      <img src="icon/check-mark.png" alt="" />
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselPhoneList;
