import styles from "./ProgressInfo.module.scss";
const ProgressInfo = ({progress}) => {
  return (
    <div className={styles.info}>
      <span className={styles.next}>След. уровень:</span>
      <span className={styles.task}>{`${progress}/10 заданий`}</span>
    </div>
  );
};

export default ProgressInfo;
