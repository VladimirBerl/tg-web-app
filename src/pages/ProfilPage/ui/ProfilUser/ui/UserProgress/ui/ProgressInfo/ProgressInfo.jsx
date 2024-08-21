import styles from "./ProgressInfo.module.scss";
const ProgressInfo = () => {
  return (
    <div className={styles.info}>
      <p className={styles.next}>След. уровень:</p>
      <p className={styles.task}>0/3 заданий</p>
    </div>
  );
};

export default ProgressInfo;
