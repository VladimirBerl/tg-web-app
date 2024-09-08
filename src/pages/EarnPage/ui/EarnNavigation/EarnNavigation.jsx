import styled from "./EarnNavigation.module.scss";
import ModalContent from "./ui/ModalContent/ModalContent";
import Top from "./ui/Top/Top";
import { useState } from "react";
import CategoryList from "./ui/CategoryList/CategoryList";

const EarnNavigation = ({ categories, setCurrentSlide, setShowModal }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAfterChange = (current) => {
    setShowModal((prev) => !prev);
    setCurrentSlide(current - 1);
  };

  return (
    <div className={styled.navigation}>
      <Top setShowPopup={setShowPopup} setShowModal={setShowModal} />
      <CategoryList
        categories={categories}
        handleAfterChange={handleAfterChange}
      />
      <ModalContent showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
};

export default EarnNavigation;
