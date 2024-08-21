import styles from "./Progress.module.scss";
const Progress = () => {
  return (
    <div className={styles.progress}>
      <div className={styles.line}></div>
      <span className={styles.level}>Level 1</span>
    </div>
  );
};

export default Progress;
