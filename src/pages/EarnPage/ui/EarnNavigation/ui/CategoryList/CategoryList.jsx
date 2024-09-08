import CategoryItem from "../CategoryItem/CategoryItem";

const CategoryList = ({ categories, handleAfterChange }) => {
  return categories.map((category) => (
    <CategoryItem
      key={category.id}
      category={category}
      handleAfterChange={handleAfterChange}
    />
  ));
};

export default CategoryList;
