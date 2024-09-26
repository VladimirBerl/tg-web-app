import styles from "./Progress.module.scss";
import { useUser } from "@/app/context/UserContext";

const Progress = () => {
  const { user } = useUser();
  return (
    <div className={styles.wrappre}>
      <div className={styles.progress}>
        <div
          className={styles.line}
          style={{ width: `${user.rank.level}0%` }}
        ></div>
      </div>
      <span className={styles.level}>Level {user?.rank.level}</span>
    </div>
  );
};

export default Progress;
