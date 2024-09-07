import TaskItemList from "../TaskItemList/TaskItemList";
import Loading from "@/widgets/Loading/Loading";
import { useGetTaskQuery } from "@/app/api";

const EarnSubscriptions = () => {
  const {
    data: task,
    isLoading,
  } = useGetTaskQuery({ type: "subscribe" });

  if (isLoading) {
    return <Loading />;
  }

  return <TaskItemList task={task} />;
};

export default EarnSubscriptions;
