import styles from "./PlanTopSwiper.module.scss";
import CarouselPhoneList from "./ui/CarouselPhoneList/CarouselPhoneList";

const PlanTopSwiper = ({ setActiveIndex, activeIndex }) => {
  return (
    <div className={styles["plan-carousel"]}>
      <h3 className={styles.title}>Plan</h3>
      <div className={styles["plan-items"]}>
        <CarouselPhoneList
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
        />
      </div>
    </div>
  );
};

export default PlanTopSwiper;
