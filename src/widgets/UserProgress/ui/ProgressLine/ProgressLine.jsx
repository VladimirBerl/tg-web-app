import styles from "./ProgressLine.module.scss";

const ProgressLine = ({ progress }) => {
  return (
    <div className={styles.progress}>
      <div className={styles.line} style={{ width: `${progress}0%` }} />
    </div>
  );
};

export default ProgressLine;
