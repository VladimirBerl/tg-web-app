import EarnMain from "./ui/EarnMain/EarnMain";
import EarnNavigation from "./ui/EarnNavigation/EarnNavigation";
import { useState } from "react";

export default function EarnPage() {
  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      {showModal ? (
        <EarnMain
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          setShowModal={setShowModal}
        />
      ) : (
        <EarnNavigation
          setCurrentSlide={setCurrentSlide}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}
