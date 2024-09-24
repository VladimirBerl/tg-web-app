import styled from "./CategoryItem.module.scss";

const CategoryItem = ({ category, handleAfterChange }) => {
  return (
    <div
      className={`${styled.category} background-br`}
      key={category.id}
      onClick={() => handleAfterChange(category.id)}
    >
      <div className={styled['category-title']}>
        <span>{category.count_tasks}</span>
        <span>{category.name}</span>
      </div>
      {/* {category.categoryIcon && <img src={category.categoryIcon} alt="icon" />} */}
    </div>
  );
};

export default CategoryItem;
