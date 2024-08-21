import styled from "./FriendsInvate.module.scss";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg";

const FriendsInvate = () => {
  return (
    <div className={styled.link}>
      <button className="background-br" onClick={handlerVibrationTg}>
        +FRIENDS
      </button>
      <button className="background-br" onClick={handlerVibrationTg}>
        <img src="/icon/copy.svg" alt="cup" />
      </button>
    </div>
  );
};

export default FriendsInvate;
