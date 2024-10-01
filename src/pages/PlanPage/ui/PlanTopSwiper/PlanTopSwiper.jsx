import styles from "./PlanTopSwiper.module.scss";
import CarouselPhoneList from "./ui/CarouselPhoneList/CarouselPhoneList";

const PlanTopSwiper = ({setIndexSlide}) => {
  return (
    <div className={styles["plan-carousel"]}>
      <h3 className={styles.title}>Plan</h3>
      <div className={styles["plan-items"]}>
        <CarouselPhoneList setIndexSlide={setIndexSlide}/>
      </div>
    </div>
  );
};

export default PlanTopSwiper;
