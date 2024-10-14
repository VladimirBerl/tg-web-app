import styled from "./GroupIcon.module.scss";
import { useState } from "react";
import ModalBottom from "@/shared/ui/ModalBottom/ModalBottom";
import InfoGroupIcon from "./ui/InfoGroupIcon/InfoGroupIcon";

const groupIcon = [
  {
    name: "question",
    icon: "/icon/question.svg",
  },
  {
    name: "watch",
    icon: "/icon/watch-w.svg",
  },
  {
    name: "dollars",
    icon: "/icon/dollars.svg",
  },
  {
    name: "telegram",
    icon: "/icon/tg-w.svg",
  },
];
const GroupIcon = () => {
  const [openInfoPlan, setOpenInfoPlan] = useState(false);

  const handlerOpenInfoPlan = () => {
    setOpenInfoPlan(!openInfoPlan);
  };

  return (
    <>
      <div onClick={handlerOpenInfoPlan} className={styled.group}>
        {groupIcon.map((icon) => (
          <button key={icon.name} className="background-br">
            <img src={icon.icon} alt="question" />
          </button>
        ))}
      </div>
      {openInfoPlan && (
        <ModalBottom
          title="Информация"
          position="-204px"
          setShowModalBottom={setOpenInfoPlan}
        >
          <InfoGroupIcon />
        </ModalBottom>
      )}
    </>
  );
};

export default GroupIcon;
