import styled from "./FriendsPage.module.scss";
import FriendsList from "./ui/FriendsList/FriendsList";
import FriendsCount from "./ui/FriendsCount/FriendsCount";
import FriendsBonuse from "./ui/FriendsBonuse/FriendsBonuse";
import FriendsTask from "./ui/FriendsTask/FriendsTask";
import FriendsInvate from "./ui/FriendsInvate/FriendsInvate";

export default function FriendsPage() {
  return (
    <div className={styled.wrapper}>
      <FriendsCount />
      <FriendsBonuse />
      <FriendsTask />
      <FriendsInvate />
      <FriendsList />
    </div>
  );
}
