import styles from "./InfoItem.module.scss";
const InfoItem = ({ items }) => {
  return items.map((item) => (
    <li className={styles.item} key={item.text}>
      <p className={styles.text}>{item.text}</p>
      <p className={`${styles.value} background-br`}>{item.value}</p>
    </li>
  ));
};

export default InfoItem;
