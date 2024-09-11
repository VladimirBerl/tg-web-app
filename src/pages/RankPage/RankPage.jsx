import styles from "./RankPage.module.scss";
import PankImages from "./ui/RankImages/RankImages";
import PankLevel from "./ui/RankLevel/RankLevel";
import UserProgress from "@/widgets/UserProgress/UserProgress";
import RankCoinsCount from "./ui/RankCoinsCount/RankCoinsCount";
import CloseBtn from "@/shared/ui/CloseBtn/CloseBtn";

import { Link } from "react-router-dom";
import { userRank } from "@/storage/storage.js";
import { useUser } from "@/app/context/UserContext";
import RankList from "./ui/RankList/RankList";

const cards = [
  {
    id: 1,
    rank: "stone",
    coins: 0,
    tasks: [
      { id: 1, description: "Заработать 100к монет" },
      { id: 2, description: "Пригласить 1 друга" },
      { id: 3, description: "Выполнить 3 задания" },
    ],
  },
  {
    id: 2,
    rank: "copper",
    coins: 5000,
    tasks: [],
  },
  {
    id: 3,
    rank: "silver",
    coins: 25000,
    tasks: [],
  },
  {
    id: 4,
    rank: "gold",
    coins: 100000,
    tasks: [],
  },
  {
    id: 5,
    rank: "platinum",
    coins: 500000,
    tasks: [],
  },
  {
    id: 6,
    rank: "diamond",
    coins: 1000000,
    tasks: [],
  },
];

const RankPage = () => {
  const { user } = useUser();
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <CloseBtn />
      </Link>
      <PankImages rank={userRank.name} />
      <PankLevel level={user.level} rankName={userRank.name} />
      <RankCoinsCount coins={user.count_coins} />
      <UserProgress />
      <RankList cards={cards} />
    </div>
  );
};

export default RankPage;
