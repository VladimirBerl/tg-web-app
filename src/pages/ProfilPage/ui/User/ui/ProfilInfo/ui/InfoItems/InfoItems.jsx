import InfoItem from "../InfoItem/InfoItem";
import { useUser } from "@/app/context/UserContext";

const InfoItems = () => {
  const { user } = useUser();
  const progress = [
    {
      text: "Дата регистрации",
      value: user?.registration_date,
    },
    {
      text: "Пригласил друзей",
      value: user?.count_invited_friends,
    },
    {
      text: "Покупки",
      value: user?.purchase_count,
    },
    {
      text: "Продажи",
      value: user?.sale_count,
    },
    {
      text: "Выполненных заданий",
      value: user?.count_tasks,
    },
  ];
  return (
      <InfoItem items={progress} />
  );
};

export default InfoItems;
