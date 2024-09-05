import styles from './TaskItemList.module.scss'
import TaskItem from "./ui/TaskItem/TaskItem";

const TaskItemList = ({ task }) => {
  return (
    <div className={styles.wrapper}>
      {task.map((item) => <TaskItem task={item} />)}
    </div>
  );
};

export default TaskItemList;
