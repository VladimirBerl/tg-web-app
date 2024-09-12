import styles from "./RankTaskUp.module.scss";
import RankProgressBar from "./ui/RankProgressBar/RankProgressBar";
import RankTaskList from "./ui/RankTaskList/RankTaskList";
import { useUser } from "@/app/context/UserContext";

const RankTaskUp = ({ tasks }) => {
  const { user } = useUser();

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>
        {tasks.rank} byuer {tasks.id}/10
      </h3>
      <RankProgressBar />
      <span className={styles.warning}>
        Выполните 3 условия чтобы повысить уровень
      </span>
      {tasks.length === 0 ? (
        <span className={styles['no-task']}>Нет задач</span>
      ) : (
        <RankTaskList conditions={tasks[user.level].conditions} />
      )}

      <span className={styles.wins}>
        За каждое выполненное условие вы получаете 1 попытку в рулетке (Вращений
        2)
      </span>
    </div>
  );
};

export default RankTaskUp;
