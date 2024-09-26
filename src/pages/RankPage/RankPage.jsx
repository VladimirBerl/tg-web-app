import styles from "./RankPage.module.scss";
import PankImages from "@/shared/ui/RankImages/RankImages";
import PankLevel from "./ui/RankLevel/RankLevel";
import UserProgress from "@/widgets/UserProgress/UserProgress";
import RankCoinsCount from "./ui/RankCoinsCount/RankCoinsCount";
import CloseBtn from "@/shared/ui/CloseBtn/CloseBtn";
import Loading from "@/widgets/Loading/Loading";

import { Link } from "react-router-dom";
import { useUser } from "@/app/context/UserContext";
import RankList from "./ui/RankList/RankList";
import { useGetRanksListQuery, useGetRanksInfoQuery } from "@/app/api";

const RankPage = () => {
  const { user } = useUser();
  const { data: ranks, isLoading: loadingRank } = useGetRanksListQuery();
  const { data: conditions, isLoading: loadingInfo } = useGetRanksInfoQuery(user.id_telegram);
  console.log(ranks);
  console.log(conditions);
  

  if (loadingRank && loadingInfo) {
    return <Loading />;
  }
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <CloseBtn />
      </Link>
      <PankImages rank={user?.rank.rank} />
      <PankLevel level={user?.rank.level} rankName={user?.rank.rank} />
      <RankCoinsCount coins={user?.count_coins} />
      <UserProgress />
      <RankList ranks={ranks} conditions={conditions} />
    </div>
  );
};

export default RankPage;
