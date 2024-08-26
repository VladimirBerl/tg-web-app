import FriendsList from "./ui/FriendsList/FriendsList";
import FriendsCount from "./ui/FriendsCount/FriendsCount";
import FriendsBonuse from "./ui/FriendsBonuse/FriendsBonuse";
import FriendsTask from "./ui/FriendsTask/FriendsTask";
import FriendsInvate from "./ui/FriendsInvate/FriendsInvate";
import { useUser } from "@/app/context/UserContext";
export default function FriendsPage() {
  const { user } = useUser();
  return (
    <div style={{ padding: "0px 16px 10px" }}>
      <FriendsCount friend={user.count_invited_friends} />
      <FriendsBonuse />
      <FriendsTask />
      <FriendsInvate />
      <FriendsList/>
    </div>
  );
}
