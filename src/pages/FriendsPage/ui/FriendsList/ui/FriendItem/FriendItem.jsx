import styled from "./FriendItem.module.scss";

const FriendItem = ({ friend }) => {
  return (
    <li className={`background-br ${styled.item}`}>
      <div className={styled.user}>
        <div className={styled.icon}>
          {friend.username.charAt(0).toUpperCase()}
        </div>
        <span className={styled.name}>{friend.username.toUpperCase()}</span>
      </div>
      <div className={styled.coin}>
        <img src="/icon/coin-min.png" alt="coin" />
        <span className={styled["coin-value"]}>+{friend.count_coins}</span>
      </div>
    </li>
  );
};

export default FriendItem;
