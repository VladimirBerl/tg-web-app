import styles from "./ProfilUser.module.scss";
import UserLevel from "./ui/UserLevel/UserLevel";
import UserName from "./ui/UserName/UserName";
import UserProgress from "./ui/UserProgress/UserProgress";
import { useUser } from "@/app/context/UserContext";

const ProfilUser = () => {
  const { user } = useUser();
  return (
    <div className={styles.profil}>
      <UserName name={user.user_name}/>
      <UserLevel level={user.level}/>
      <UserProgress />
    </div>
  );
};

export default ProfilUser;
