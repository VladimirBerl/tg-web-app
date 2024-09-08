import styled from "./CategoryItem.module.scss";

const CategoryItem = ({ category, handleAfterChange }) => {
  return (
    <div
      className={`${styled.category} background-br`}
      key={category.id}
      onClick={() => handleAfterChange(category.id)}
    >
      <div className={styled['category-title']}>
        <span>{category.countTasks}</span>
        <span>{category.categoryName}</span>
      </div>
      {category.categoryIcon && <img src={category.categoryIcon} alt="icon" />}
    </div>
  );
};

export default CategoryItem;
