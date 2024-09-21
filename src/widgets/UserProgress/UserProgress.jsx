import ProgressInfo from "./ui/ProgressInfo/ProgressInfo";
import ProgressLine from "./ui/ProgressLine/ProgressLine";

const UserProgress = () => {
  return (
    <>
      <ProgressInfo />
      <ProgressLine progress="10"/>
    </>
  );
};

export default UserProgress;
