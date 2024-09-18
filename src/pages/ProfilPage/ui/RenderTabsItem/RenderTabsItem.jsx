import User from "../User/User";
import Transactions from "../Transactions/Transactions";
import { Roulette } from "@/widgets/Roulette";

const RenderTabsItem = ({tab}) => {
  switch (tab) {
    case "Профиль":
      return <User />;
    case "Рулетка":
      return <Roulette />;
    case "Транзакции":
      return <Transactions />;
    default:
      return <User />;
  }
};

export default RenderTabsItem;
