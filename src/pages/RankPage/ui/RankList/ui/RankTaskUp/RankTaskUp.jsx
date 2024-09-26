import styles from "./RankTaskUp.module.scss";
import RankProgressBar from "./ui/RankProgressBar/RankProgressBar";
import RankTaskList from "./ui/RankTaskList/RankTaskList";

const RankTaskUp = ({ conditions }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>
        {conditions.rank} byuer {conditions.level}/10
      </h3>
      <RankProgressBar />
      <span className={styles.warning}>
        Выполните 3 условия чтобы повысить уровень
      </span>
      {conditions.conditions.length === 0 ? (
        <span className={styles["no-task"]}>Нет задач</span>
      ) : (
        <RankTaskList conditions={conditions.conditions} />
      )}

      <span className={styles.wins}>
        За каждое выполненное условие вы получаете 1 попытку в рулетке (Вращений
        2)
      </span>
    </div>
  );
};

export default RankTaskUp;
