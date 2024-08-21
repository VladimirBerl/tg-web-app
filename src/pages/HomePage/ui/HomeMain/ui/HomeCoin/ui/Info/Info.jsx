import styles from "./Info.module.scss";
import ModalBottom from "@/shared/ui/ModalBottom/ModalBottom";
import InfoItem from "./ui/InfoItem/InfoItem";

const InfoItems = [
  {
    text: "Покупайте и продавайте токен, добавляйте ликвидность и получайте монеты в награду",
    icon: "/public/icon/token.svg",
  },
  {
    text: "Участвуйте в совместной разработке приложения и получайте награды в монетах",
    icon: "/public/icon/plan.svg",
  },
  {
    text: "Заходите каждый день в приложение и фармите монеты",
    icon: "/public/icon/home.svg",
  },
  {
    text: "Приглашайте друзей в приложение и получайте монеты за каждого друга",
    icon: "/public/icon/friend.svg",
  },
  {
    text: "Выполняйте задания и зарабатывайте больше монет",
    icon: "/public/icon/earn.svg",
  },
];

const Info = ({ setShowModalBottom }) => {
  return (
    <ModalBottom position="89px" setShowModalBottom={setShowModalBottom}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Как можно получить больше монет?</h3>
        <ul className={styles.items}>
          <InfoItem item={InfoItems} />
        </ul>
        <p className={styles.desc}>
          В каждом разделе есть свой пул наград.Количество и срок получения их
          ограничен, успей получить награды раньше других
        </p>
      </div>
    </ModalBottom>
  );
};

export default Info;
