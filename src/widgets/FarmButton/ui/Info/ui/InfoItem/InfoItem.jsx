import styles from "./InfoItem.module.scss";
const InfoItem = ({ item }) => {
  return item.map((item) => (
    <li key={item.text} className={styles.item}>
      <img src={item.icon} alt="icon" />
      <div className={styles.content}>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.decs}>{item.decs}</span>
      </div>
    </li>
  ));
};

export default InfoItem;
