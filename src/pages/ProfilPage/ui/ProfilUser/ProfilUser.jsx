import styles from "./ProfilUser.module.scss";
import UserLevel from "./ui/UserLevel/UserLevel";
import UserName from "./ui/UserName/UserName";
import UserProgress from "./ui/UserProgress/UserProgress";

const ProfilUser = () => {
  return (
    <div className={`${styles.profil} background-br`}>
      <UserName />
      <UserLevel />
      <UserProgress />
    </div>
  );
};

export default ProfilUser;
