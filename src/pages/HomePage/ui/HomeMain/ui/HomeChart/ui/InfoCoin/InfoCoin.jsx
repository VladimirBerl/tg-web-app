import styled from "./InfoCoin.module.scss";

const InfoCoin = ({ nameChart }) => {
  return (
    <div className={`${styled.info} background-br`}>
      <span>{nameChart}</span>
    </div>
  );
};

export default InfoCoin;
