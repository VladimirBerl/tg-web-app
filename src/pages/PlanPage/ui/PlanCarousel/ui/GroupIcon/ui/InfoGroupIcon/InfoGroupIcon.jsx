import styles from "./InfoGroupIcon.module.scss";

const InfoGroupIcon = () => {
  return (
    <div className={styles.content}>
      <span className={styles.title}>
        Функция доступна с 15 уровня для ранга Copper Buyer
      </span>
      <img className={styles.img} src="rank/copper.png" alt="rank" />
      <span className={styles.rank}>Copper Buyer</span>
    </div>
  );
};

export default InfoGroupIcon;
