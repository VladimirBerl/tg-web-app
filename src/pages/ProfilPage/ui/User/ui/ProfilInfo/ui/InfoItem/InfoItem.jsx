import styles from "./InfoItem.module.scss";
const InfoItem = ({ items }) => {
  return items.map((item) => (
    <li className={styles.item} key={item.text}>
      <span className={styles.text}>{item.text}</span>
      <span className={`${styles.value} background-br`}>{item.value}</span>
    </li>
  ));
};

export default InfoItem;
