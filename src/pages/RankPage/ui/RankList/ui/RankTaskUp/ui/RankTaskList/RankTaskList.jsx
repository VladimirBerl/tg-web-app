import styles from "./RankTaskList.module.scss";
import RankTaskListItem from "./ui/RankTaskListItem/RankTaskListItem";

const RankTaskList = ({ conditions }) => {

  return (
    <div className={styles["task-list"]}>
      {conditions.map((condition, index) => (
        <RankTaskListItem index={index} condition={condition} />
      ))}
    </div>
  );
};

export default RankTaskList;
