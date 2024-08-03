import FriendsList from "./ui/FriendsList/FriendsList";
import FriendsCount from "./ui/FriendsCount/FriendsCount";
import FriendsBonuse from "./ui/FriendsBonuse/FriendsBonuse";
import FriendsTask from "./ui/FriendsTask/FriendsTask";
import FriendsInvate from "./ui/FriendsInvate/FriendsInvate";

export default function FriendsPage() {
  return (
    <div style={{ padding: "0px 16px 10px" }}>
      <FriendsCount />
      <FriendsBonuse />
      <FriendsTask />
      <FriendsInvate />
      <FriendsList />
    </div>
  );
}
