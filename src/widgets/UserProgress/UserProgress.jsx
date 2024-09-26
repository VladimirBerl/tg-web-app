import ProgressInfo from "./ui/ProgressInfo/ProgressInfo";
import ProgressLine from "./ui/ProgressLine/ProgressLine";
import { useUser } from "@/app/context/UserContext";

const UserProgress = () => {
  const { user } = useUser();
  return (
    <>
      <ProgressInfo progress={user.rank.level}/>
      <ProgressLine progress={user.rank.level} />
    </>
  );
};

export default UserProgress;
