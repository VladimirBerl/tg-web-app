import styled from "./NavigationItem.module.scss";

const NavigationItem = ({ category }) => {
  return (
    <div key={category.id} className={styled["carousel-btn"]}>
      <span>{category.categoryName}</span>
      <img src={category.categoryIcon} alt="icon" />
    </div>
  );
};

export default NavigationItem;
