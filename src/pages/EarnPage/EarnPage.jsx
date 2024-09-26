import EarnMain from "./ui/EarnMain/EarnMain";
import EarnNavigation from "./ui/EarnNavigation/EarnNavigation";
import { useState } from "react";

import { useUser } from "@/app/context/UserContext";
import { useGetTaskQuery } from "@/app/api";
import Loading from "../../widgets/Loading/Loading";

export default function EarnPage() {
  const { user } = useUser();
  const { data: categories, isLoading } = useGetTaskQuery(user.id_telegram);

  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (isLoading) {
    return <Loading/>;
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
