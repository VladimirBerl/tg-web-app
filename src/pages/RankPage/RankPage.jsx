import styles from "./RankPage.module.scss";
import PankImages from "@/shared/ui/RankImages/RankImages";
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
      {
        level: 1,
        conditions: [
          {
            id: 1,
            type: "coins",
            description: "Заработать 100 000 монет",
            target: 100000,
          },
          {
            id: 2,
            type: "friends",
            description: "Пригласить 1 друга",
            target: 1,
          },
          {
            id: 3,
            type: "task",
            description: "Выполнить 10 заданий",
            target: 10,
          },
        ],
      },
      {
        level: 2,
        conditions: [
          {
            id: 1,
            description: "Заработать 200 000 монет",
            target: 200000,
            type: "coins",
          },
          {
            id: 2,
            description: "Пригласить 2 друга",
            target: 2,
            type: "friends",
          },
          {
            id: 3,
            description: "Выполнить 20 заданий",
            target: 20,
            type: "task",
          },
        ],
      },
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
      <PankLevel level={user?.level} rankName={userRank.name} />
      <RankCoinsCount coins={user?.count_coins} />
      <UserProgress />
      <RankList cards={cards} />
    </div>
  );
};

export default RankPage;
