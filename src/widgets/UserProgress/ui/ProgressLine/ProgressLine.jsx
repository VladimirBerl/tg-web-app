import styles from "./ProgressLine.module.scss";

const ProgressLine = ({ progress }) => {
  return (
    <div className={styles.progress}>
      <div className={styles.line} style={{ width: `${progress}%` }} />
    </div>
  );
};

export default ProgressLine;
