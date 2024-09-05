import { useEffect, useState } from "react";
import styles from "./UserName.module.scss";

const UserName = ({ name }) => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    window.Telegram.WebApp.ready();
    const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
    const userIdFromTelegram = initDataUnsafe?.user?.id;
    setUserId(userIdFromTelegram);
  }, []);

  return (
    <div>
      <p className={styles.name}>{name}</p>
      <p className={styles.name}>{userId ? userId : "Loading..."}</p>
    </div>
  );
};

export default UserName;
