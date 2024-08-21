import styled from "./HomeTopModal.module.scss";
import HomeTopModalChildren from "../HomeTopModalChildren/HomeTopModalChildren";
import ModalBottom from "@/shared/ui/ModalBottom/ModalBottom";
const cubLevel = [
  {
    id: 1,
    title: "Buyer Russia Marketplace",
    icon: "/icon/rus.svg",
    conditions: [
      {
        id: 1,
        title: "Заработать 100к монет",
        target: 100,
      },
      {
        id: 2,
        title: "Пригласить 1 друга",
        target: 1,
      },
      {
        id: 3,
        title: "Выполнить 3 задания",
        target: 3,
      },
    ],
    possibilities: [
      {
        id: 1,
        title: "Доход монет на +2%",
      },
      {
        id: 2,
        title: "Получить 10 000 монет",
      },
      {
        id: 3,
        title: "Доступ к поиску товара",
      },
    ],
  },
  {
    id: 2,
    title: "Buyer China Marketplace",
    icon: "/icon/china.svg",
  },
  {
    id: 3,
    title: "Buyer Europa Marketplace",
    icon: "/icon/europa.svg",
  },
  {
    id: 4,
    title: "Buyer TG Marketplace",
    icon: "/icon/tg.svg",
  },
];

const HomeTopModal = ({ setShowModal }) => {
  return (
    <ModalBottom position="-297px" setShowModalBottom={setShowModal}>
      <div className={styled.task}>
        <h2 className={styled.title}>
          Открывай уровни получай больше возможностей
        </h2>
        <HomeTopModalChildren items={cubLevel} />
      </div>
    </ModalBottom>
  );
};

export default HomeTopModal;
