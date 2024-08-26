import styled from "./FriendsBonuse.module.scss";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg";
import { useUser } from "@/app/context/UserContext";
const FriendsBonuse = () => {
  const {user} = useUser();
  return (
    <button onClick={handlerVibrationTg} className={`${styled["btn-friends"]} background-br`}>
      <div className={styled["coin-img"]}>
        <img src="/icon/coin-min.png" alt="coin" />
      </div>
      <span>+{user?.count_invited_friends * 5000}</span>
    </button>
  );
};

export default FriendsBonuse;
