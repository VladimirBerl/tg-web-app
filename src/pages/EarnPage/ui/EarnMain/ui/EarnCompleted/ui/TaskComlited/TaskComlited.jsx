import styles from "./TaskComlited.module.scss";
import TaskItems from './ui/TaskItems'

const TaskComlited = ({ tasks }) => {
  if (tasks.length === 0) {
    return <div className={styles.title}>Нет задач</div>;
  }
  return (
    <div className={styles.wrapper}>
      {tasks.map((task) => (
        <TaskItems task={task} />
      ))}
    </div>
  );
};

export default TaskComlited;
