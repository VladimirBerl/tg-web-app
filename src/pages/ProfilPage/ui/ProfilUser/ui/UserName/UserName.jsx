import styles from "./UserName.module.scss";
window.Telegram.WebApp.ready();
const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
const userId = initDataUnsafe.user?.id;
const UserName = ({ name }) => {
  return (
    <div>
      <p className={styles.name}>{name}</p>
      <p className={styles.name}>{userId}</p>
    </div>
  );
};

export default UserName;
