import EarnMain from "./ui/EarnMain/EarnMain";
import EarnNavigation from "./ui/EarnNavigation/EarnNavigation";
import { useState } from "react";
import { categories } from "@/storage/storage.js";

export default function EarnPage() {
  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      {showModal ? (
        <EarnMain
          categories={categories}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          setShowModal={setShowModal}
        />
      ) : (
        <EarnNavigation
          categories={categories}
          setCurrentSlide={setCurrentSlide}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}
