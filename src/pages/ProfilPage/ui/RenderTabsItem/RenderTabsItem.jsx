import User from "../User/User";
import Transactions from "../Transactions/Transactions";
import { Roolet } from "@/widgets/Roolet";

const RenderTabsItem = ({tab}) => {
  switch (tab) {
    case "Профиль":
      return <User />;
    case "Рулетка":
      return <Roolet />;
    case "Транзакции":
      return <Transactions />;
    default:
      return <User />;
  }
};

export default RenderTabsItem;
