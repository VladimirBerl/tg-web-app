import styles from "./ProfilUser.module.scss";
import UserLevel from "./ui/UserLevel/UserLevel";
import UserName from "./ui/UserName/UserName";
import UserProgress from "@/widgets/UserProgress/UserProgress";
import { useUser } from "@/app/context/UserContext";
import RankImages from "@/shared/ui/RankImages/RankImages";

const ProfilUser = () => {
  const { user } = useUser();
  return (
    <div className={styles.profil}>
      <UserName name={user?.user_name} />
      <RankImages rank={user.rank.rank} />
      <UserLevel level={user?.level} />
      <UserProgress />
    </div>
  );
};

export default ProfilUser;
