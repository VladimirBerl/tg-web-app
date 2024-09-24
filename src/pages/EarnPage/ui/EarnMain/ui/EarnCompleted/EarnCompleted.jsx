import TaskInfo from "./ui/TaskInfo/TaskInfo";
import TaskComlited from "./ui/TaskComlited/TaskComlited";

const EarnCompleted = ({ tasks }) => {
  return (
    <>
      <TaskInfo tasks={tasks} />
      <TaskComlited tasks={tasks} />
    </>
  );
};

export default EarnCompleted;
