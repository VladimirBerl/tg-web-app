import styled from './FriendsCount.module.scss'

const FriendsCount = () => {
  return (
    <div className={styled.top}>
      <div className={styled["friends-img"]}>
        <img src="/icon/friends.svg" alt="friends" />
      </div>
      <h2>0 Друзей</h2>
      <div className={styled.star}>
        <img src="/images/star.png" alt="star" />
      </div>
    </div>
  );
};

export default FriendsCount;
