import styled from "./FriendsInvate.module.scss";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg";

const FriendsInvate = () => {
  return (
    <div className={styled.link}>
      <button onClick={handlerVibrationTg}>+FRIENDS</button>
      <button onClick={handlerVibrationTg}>
        <img src="/icon/copy.svg" alt="cup" />
      </button>
    </div>
  );
};

export default FriendsInvate;
