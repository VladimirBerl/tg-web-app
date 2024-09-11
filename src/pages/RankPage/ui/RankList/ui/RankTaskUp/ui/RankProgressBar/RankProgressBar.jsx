import styles from "./RankProgressBar.module.scss";

const RankProgressBar = () => {
  return (
    <div className={styles.progress}>
      <div className={styles["progress-item"]}></div>
      <div className={styles["progress-item"]}></div>
      <div className={styles["progress-item"]}></div>
      <div className={styles["progress-item"]}></div>
      <div className={styles["progress-item"]}></div>
      <div className={styles["progress-item"]}></div>
      <div className={styles["progress-item"]}></div>
      <div className={styles["progress-item"]}></div>
      <div className={styles["progress-item"]}></div>
      <div className={styles["progress-item"]}></div>
      <div className={styles.target}>
        <div className={styles.line}></div>
      </div>
    </div>
  );
};

export default RankProgressBar;
