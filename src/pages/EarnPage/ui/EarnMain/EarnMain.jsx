import Navigation from "./ui/Navigation/Navigation";
import TaskItemList from "../TaskItemList/TaskItemList";
import EarnCompleted from "./ui/EarnCompleted/EarnCompleted";
import { useRef, useEffect } from "react";

const EarnMain = ({
  categories,
  currentSlide,
  setCurrentSlide,
  setShowModal,
}) => {
  const carouselRef = useRef(null);
  const goToSlide = () => {
    carouselRef.current.goTo(currentSlide);
  };

  useEffect(() => {
    goToSlide();
  }, [carouselRef]);

  const handleAfterChange = (current) => {
    setCurrentSlide(current);
  };

  return (
    <>
      <Navigation
        categories={categories}
        setShowModal={setShowModal}
        handleAfterChange={handleAfterChange}
        carouselRef={carouselRef}
      />
      {currentSlide === 5 ? (
        <EarnCompleted />
      ) : (
        <TaskItemList tasks={categories[currentSlide].tasks} />
      )}
    </>
  );
};

export default EarnMain;
