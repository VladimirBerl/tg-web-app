import styled from "./FriendItem.module.scss";

const FriendItem = ({ friend }) => {
  return (
    <li className="background-br">
      <div className={styled.user}>
        <div className={styled.icon}>{friend.name.charAt(0).toUpperCase()}</div>
        <span className={styled.name}>{friend.name}</span>
      </div>
      <div className={styled.coin}>
        <img src="/icon/coin.svg" alt="coin" />
        <span className={styled["coin-value"]}>+{friend.coin}</span>
      </div>
    </li>
  );
};

export default FriendItem;
