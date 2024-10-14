import styled from "./Top.module.scss";

const Top = ({ setShowPopup, setShowModal }) => {
  return (
    <div className={styled.top}>
      <div onClick={() => setShowModal((prev) => !prev)}>
        <img src="/icon/category.svg" alt="category" />
      </div>
      <span>Категории</span>
      <div onClick={() => setShowPopup((prev) => !prev)} className={styled.add}>
        <img src="/icon/add.svg" alt="add" />
      </div>
    </div>
  );
};

export default Top;
