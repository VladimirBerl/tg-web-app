import Navigation from "./ui/Navigation/Navigation";
import EarnTask from "../EarnTask/EarnTask";
import EarnBonuses from "../EarnBonuses/EarnBonuses";
import EarnVideo from "../EarnVideo/EarnVideo";
import EarnGame from "../EarnGame/EarnGame";
import EarnSubscriptions from "../EarnSubscriptions/EarnSubscriptions";
import EarnCompleted from "../EarnCompleted/EarnCompleted";
import { useRef, useEffect } from "react";

const EarnMain = ({ currentSlide, setCurrentSlide, setShowModal }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const goToSlide = () => {
      carouselRef.current.goTo(currentSlide);
    };
    goToSlide();
  }, [carouselRef]);

  const handleAfterChange = (current) => {
    setCurrentSlide(current);
  };

  const renderComponent = () => {
    switch (currentSlide) {
      case 0:
        return <EarnTask />;
      case 1:
        return <EarnGame />;
      case 2:
        return <EarnVideo />;
      case 3:
        return <EarnBonuses />;
      case 4:
        return <EarnSubscriptions />;
      case 5:
        return <EarnCompleted />;
      default:
        return null;
    }
  };
  return (
    <>
      <Navigation
        setShowModal={setShowModal}
        handleAfterChange={handleAfterChange}
        carouselRef={carouselRef}
      />
      <div style={{ height: "80vh" }}>
        {renderComponent()}
      </div>
    </>
  );
};

export default EarnMain;
