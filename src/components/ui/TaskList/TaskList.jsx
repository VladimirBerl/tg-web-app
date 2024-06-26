import styled from "./TaskList.module.scss";
import TaskItem from "../TaskItem/TaskItem";
import { itemTasks } from "../../../storage/storage";
export default function TaskList({ children }) {
  return (
    <div className={styled["task-list"]}>
      <span>{children}</span>
      {itemTasks.map(({ names, desc, link, icon, price }) => (
        <TaskItem
          names={names}
          desc={desc}
          link={link}
          icon={icon}
          price={price}
        />
      ))}
    </div>
  );
}
