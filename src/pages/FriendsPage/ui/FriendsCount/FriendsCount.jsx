import styled from "./FriendsCount.module.scss";
import { useUser } from "@/app/context/UserContext";

const FriendsCount = () => {
  const {user} = useUser();
  return (
    <div className={styled.top}>
      <div className={styled["friends-img"]}>
        <img src="/icon/friends.svg" alt="friends" />
      </div>
      <h2>Друзей {user?.count_invited_friends}</h2>
      <div className={styled.star}>
        <img src="/images/star.png" alt="star" />
      </div>
    </div>
  );
};

export default FriendsCount;
