import styled from "./FriendsList.module.scss";

const friends = [
  {
    name: "NFT-Bro",
    coin: 1103,
  },
  {
    name: "NFT-Bro",
    coin: 1103,
  },
  {
    name: "NFT-Bro",
    coin: 1103,
  },
];

const FriendsList = () => {
  return (
    <div className={styled.wrapper}>
      <h2 className={styled.title}>Friends List</h2>
      <ul className={styled.friends}>
        {friends.map((item) => (
          <li key={item.name}>
            <div className={styled.user}>
              <div className={styled.icon}>
                {item.name.charAt(0).toUpperCase()}
              </div>
              <span className={styled.name}>{item.name}</span>
            </div>
            <div className={styled.coin}>
              <img src="/icon/coin.svg" alt="coin" />
              <span className={styled["coin-value"]}>+{item.coin}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
