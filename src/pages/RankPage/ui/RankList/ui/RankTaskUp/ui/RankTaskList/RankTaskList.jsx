import styles from "./RankTaskList.module.scss";
import RankTaskListItem from "./ui/RankTaskListItem/RankTaskListItem";

const RankTaskList = ({ conditions }) => {
  return (
    <div className={styles["task-list"]}>
      {conditions.map((condition) => (
        <RankTaskListItem key={condition.id} condition={condition} />
      ))}
    </div>
  );
};

export default RankTaskList;
