import styled from "./Top.module.scss";

const Top = ({ setShowPopup, setShowModal }) => {
  return (
    <div className={styled.top}>
      <div onClick={() => setShowPopup((prev) => !prev)} className={styled.add}>
        <img src="/icon/add.svg" alt="add" />
      </div>
      <div onClick={() => setShowModal((prev) => !prev)}>
        <img src="/icon/category.svg" alt="category" />
      </div>
      <span>Категории</span>
    </div>
  );
};

export default Top;
