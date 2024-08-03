import styled from "./FriendsBonuse.module.scss";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg";

const FriendsBonuse = () => {
  return (
    <button onClick={handlerVibrationTg} className={`${styled["btn-friends"]} background-br`}>
      <div className={styled["coin-img"]}>
        <img src="/icon/coin.svg" alt="coin" />
      </div>
      <span>+50 000</span>
    </button>
  );
};

export default FriendsBonuse;
