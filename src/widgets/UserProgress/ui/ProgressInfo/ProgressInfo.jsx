import styles from "./ProgressInfo.module.scss";
const ProgressInfo = ({progress}) => {
  return (
    <div className={styles.info}>
      <p className={styles.next}>След. уровень:</p>
      <p className={styles.task}>{`${progress}/10 заданий`}</p>
    </div>
  );
};

export default ProgressInfo;
