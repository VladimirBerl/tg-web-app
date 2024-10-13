import styled from "./HeaderState.module.scss";
import ModalBottom from "@/shared/ui/ModalBottom/ModalBottom";
import { useModal } from "@/shared/hooks/modal.js";
import ModalContent from "./ui/ModalContent/ModalContent";
import { useGetPullInfoQuery } from "@/app/api";
import { useState, useEffect } from "react";

const STATICS_PULL = [
  { type_pull: "farming", size: 1000000, current_size: 0, percent: 0 },
  { type_pull: "tasks", size: 250000, current_size: 15000, percent: 6 },
  { type_pull: "friends", size: 240000, current_size: 10000, percent: 4 },
  { type_pull: "coins", size: 250000, current_size: 0, percent: 0 },
  { type_pull: "plan", size: 250000, current_size: 0, percent: 0 },
];

const HeaderState = ({ paths }) => {
  const isHome = paths === "/";
  const { isOpen, toggle } = useModal();
  const { data } = useGetPullInfoQuery();
  const [pulls, setPulls] = useState(STATICS_PULL);

  useEffect(() => {
    if (data) {
      setPulls(data);
    }
  }, [data]);

  const currentPull = pulls.find(
    (pull) => pull.type_pull === getTypeByPath(paths)
  );

  function getTypeByPath(path) {
    switch (path) {
      case "/":
        return "farming";
      case "/earn":
        return "tasks";
      case "/friends":
        return "friends";
      case "/token":
        return "coins";
      case "/plan":
        return "plan";
      default:
        return "farming";
    }
  }

  return (
    <>
      {currentPull && (
        <div onClick={toggle} className={`${styled.state} background-br`}>
          <div className={styled.name}>
            <span>{(currentPull.size - currentPull.current_size).toLocaleString("de-DE")}</span>
            <img src="/icon/coin-min.png" alt="rub" />
          </div>
          <div className={`${styled.procent} background-br`}>
            <span>{(currentPull.percent).toFixed(1)}%</span>
            <span>Mined</span>
          </div>
          {!isHome && (
            <div className={`${styled.time} background-br`}>
              <img src="/icon/time.svg" alt="time" />
              <span>30d 17h</span>
            </div>
          )}
        </div>
      )}

      {isOpen && (
        <ModalBottom
          position="-120px"
          setShowModalBottom={toggle}
          title="Условия получения наград с пула"
        >
          <ModalContent data={currentPull} />
        </ModalBottom>
      )}
    </>
  );
};

export default HeaderState;
