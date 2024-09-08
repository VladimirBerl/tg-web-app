import styled from "./FriendsList.module.scss";
import FriendItem from "./ui/FriendItem/FriendItem";
import { useUser } from "@/app/context/UserContext";
import { useGetUserFriendsQuery } from "@/app/api";

const FriendsList = () => {
  const { user } = useUser();
  const { data, loading, error } = useGetUserFriendsQuery(user?.id_telegram);

  return (
    <div className={styled.wrapper}>
      <h2 className={styled.title}>Friends List</h2>
      <ul className={styled.friends}>
        {loading && <p className={styled["no-frends"]}>Loading friends...</p>}
        {error && (
          <p className={styled["no-friends"]}>Failed to load friends.</p>
        )}
        {data &&
          data.map((friend) => (
            <FriendItem key={friend.user_name} friend={friend} />
          ))}
      </ul>
    </div>
  );
};

export default FriendsList;
