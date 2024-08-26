import styles from "./Progress.module.scss";
import { useUser } from "@/app/context/UserContext";

const Progress = () => {
  const { user } = useUser();
  return (
    <div className={styles.progress}>
      <div className={styles.line}></div>
      <span className={styles.level}>Level {user?.level}</span>
    </div>
  );
};

export default Progress;
