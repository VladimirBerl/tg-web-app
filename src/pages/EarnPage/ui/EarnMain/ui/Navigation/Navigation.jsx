import styled from "./Navigation.module.scss";
import { Carousel } from "antd";
import NavigationItem from "./ui/NavigationItem/NavigationItem";

const Navigation = ({
  categories,
  setShowModal,
  handleAfterChange,
  carouselRef,
}) => {
  return (
    <div className={`${styled.navigation} carousel `}>
      <div className={styled.carousel}>
        <div
          onClick={() => setShowModal((prev) => !prev)}
          className={styled.category}
        >
          <img src="/icon/category.svg" alt="category" />
        </div>
        <Carousel
          infinite={false}
          afterChange={handleAfterChange}
          ref={carouselRef}
        >
          {categories.map((category) => (
            <NavigationItem key={category.id} category={category} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Navigation;
