import styled from "./HeaderState.module.scss";
import ModalBottom from "@/shared/ui/ModalBottom/ModalBottom";
import { useModal } from "@/shared/hooks/modal.js";
import ModalContent from "./ui/ModalContent/ModalContent";

const HeaderState = ({ isHome }) => {
  const { isOpen, toggle } = useModal();
  return (
    <>
      <div onClick={toggle} className={`${styled.state} background-br`}>
        <div style={isHome ? { fontSize: "10px" } : {}} className={styled.name}>
          <span>2B</span>
          <img src="/icon/rub-min.png" alt="rub" />
          <span>BMP</span>
        </div>
        <div
          style={isHome ? { fontSize: "10px" } : {}}
          className={`${styled.procent} background-br`}
        >
          <span>68.213%</span>
          <span>Mined</span>
        </div>
        {!isHome && (
          <div className={`${styled.time} background-br`}>
            <img src="/icon/time.svg" alt="time" />
            <span>30d 17h</span>
          </div>
        )}
      </div>
      {isOpen && (
        <ModalBottom
          position="-120px"
          setShowModalBottom={toggle}
          title="Условия получения наград с пула"
        >
          <ModalContent />
        </ModalBottom>
      )}
    </>
  );
};

export default HeaderState;
