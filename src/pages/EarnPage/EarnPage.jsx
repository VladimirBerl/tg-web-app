import EarnMain from "./ui/EarnMain/EarnMain";
import EarnNavigation from "./ui/EarnNavigation/EarnNavigation";
import { useState } from "react";

import { useUser } from "@/app/context/UserContext";
import { useGetTaskQuery } from "@/app/api";

export default function EarnPage() {
  const { user } = useUser();
  const { data: categories, isLoading } = useGetTaskQuery(user.id_telegram);
  console.log(categories);

  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
