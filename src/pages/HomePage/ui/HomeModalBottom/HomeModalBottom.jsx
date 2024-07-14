import styled from "./HomeModalBottom.module.scss";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
const HomeModalBottom = ({ children, setShowModalBottom }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModalBottom((prev) => !prev);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);
  return createPortal(
    <div className={styled.modal} ref={modalRef}>
      <img
        onClick={() => {
          setShowModalBottom((prev) => !prev);
        }}
        className={styled.close}
        src="/public/icon/close.svg"
        alt="close"
      />
      {children}
    </div>,
    document.getElementById("portal")
  );
};

export default HomeModalBottom;
