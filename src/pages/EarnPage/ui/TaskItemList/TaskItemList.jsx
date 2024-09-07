import styles from './TaskItemList.module.scss'
import TaskItems from "./ui/TaskItems/TaskItems";

const TaskItemList = ({ task }) => {
  return (
    <div className={styles.wrapper}>
      {task.map((item) => <TaskItems task={item} />)}
    </div>
  );
};

export default TaskItemList;
