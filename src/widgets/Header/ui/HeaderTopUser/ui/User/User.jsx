import styles from "./User.module.scss";
import { Link } from "react-router-dom";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg";

const User = () => {
  return (
    <Link className={styles.link} onClick={handlerVibrationTg} to="profile">
      <div className={`${styles.user} background-br`}>
        <img src="/icon/user.svg" alt="user" />
        <span>User</span>
      </div>
    </Link>
  );
};

export default User;
