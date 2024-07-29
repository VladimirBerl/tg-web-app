import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "./ModalBottom.module.scss";

const ModalBottom = ({ children, setShowModalBottom, position = "32px" }) => {
  const modalRef = useRef();
  const firstBlockRef = useRef();
  
  const [topPosition, setTopPosition] = useState(position);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModalBottom(false);
      }
    };

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowModalBottom]);

  return createPortal(
    <div
      className={styled.modal}
      ref={modalRef}
      style={{ bottom: topPosition, transition: "top 0.4s" }} // Добавьте анимацию через CSS transition
    >
      <img
        onClick={() => setShowModalBottom(false)}
        className={styled.close}
        src="/icon/close.svg"
        alt="close"
      />
      <div ref={firstBlockRef}>{children}</div>
    </div>,
    document.getElementById("portal")
  );
};

export default ModalBottom;
