import styled from "./FriendsList.module.scss";
import FriendItem from "./ui/FriendItem/FriendItem";

const friends = [
  {
    id: "1",
    name: "NFT-Bro",
    coin: 1103,
  },
  {
    id: "2",
    name: "NFT-Bro",
    coin: 1103,
  },
  {
    id: "3",
    name: "NFT-Bro",
    coin: 1103,
  },
];

const FriendsList = () => {
  return (
    <div className={styled.wrapper}>
      <h2 className={styled.title}>Friends List</h2>
      <ul className={styled.friends}>
        {friends.map((friend) => (
          <FriendItem key={friend.id} friend={friend} />
        ))}
      </ul>
    </div>
  );
};

export default FriendsList;
