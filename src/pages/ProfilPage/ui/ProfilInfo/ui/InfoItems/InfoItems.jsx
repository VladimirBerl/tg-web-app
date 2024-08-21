import InfoItem from "../InfoItem/InfoItem";
import styles from "./InfoItems.module.scss";
const progress = [
  {
    text: "Дата регистрации",
    value: "15.08.2024",
  },
  {
    text: "Пригласил друзей",
    value: 0,
  },
  {
    text: "Покупки",
    value: "+122",
  },
  {
    text: "Продажи",
    value: "+410",
  },
  {
    text: "Выполненных заданий",
    value: 0,
  },
];
const InfoItems = () => {
  return (
    <ul>
      <InfoItem items={progress} />
    </ul>
  );
};

export default InfoItems;
