import styles from "./InfoItem.module.scss";
const InfoItem = ({ item }) => {
  return item.map((item) => (
    <li key={item.text} className={styles.item}>
      <img src={item.icon} alt="icon" />
      <p>{item.text}</p>
    </li>
  ));
};

export default InfoItem;
