import styled from "./EarnPage.module.scss";
import EarnMain from "./ui/EarnMain/EarnMain";
import EarnNavigation from "./ui/EarnNavigation/EarnNavigation";
import { useState } from "react";

export default function EarnPage() {
  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className={styled.earn}>
      {showModal ? (
        <EarnMain
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />
      ) : (
        <EarnNavigation setCurrentSlide={setCurrentSlide} setShowModal={setShowModal}/>
      )}
    </div>
  );
}
