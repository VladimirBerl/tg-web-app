import ProgressInfo from "./ui/ProgressInfo/ProgressInfo";
import styles from "./UserProgress.module.scss";
const UserProgress = () => {
  return (
    <div>
      <ProgressInfo />
      <div className={styles.progress}></div>
    </div>
  );
};

export default UserProgress;
