import ProgressInfo from "./ui/ProgressInfo/ProgressInfo";
import ProgressLine from "./ui/ProgressLine/ProgressLine";
import { useUser } from "@/app/context/UserContext";

const UserProgress = () => {
  const { user } = useUser();
  return (
    <>
      <ProgressInfo progress={user.level}/>
      <ProgressLine progress={user.level} />
    </>
  );
};

export default UserProgress;
