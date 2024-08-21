import styled from "./CategoryItem.module.scss";

const CategoryItem = ({ task, handleAfterChange }) => {
  return (
    <div
      className={`${styled.task} background-br`}
      key={task.id}
      onClick={() => handleAfterChange(task.id)}
    >
      <div>
        <span>{task.count}</span>
        <span>{task.name}</span>
      </div>
      {task.img && <img src={task.img} alt="icon" />}
    </div>
  );
};

export default CategoryItem;
