import { useEffect, useState } from "react";
import styles from "./UserName.module.scss";

const UserName = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    window.Telegram.WebApp.ready();
    const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;

    if (initDataUnsafe && initDataUnsafe.user) {
      const usernameFromTelegram = initDataUnsafe.user.username;
      setUsername(usernameFromTelegram);
    } else {
      console.error("User data not available");
    }
  }, []);

  return (
    <div>
      <p className={styles.name}>
        {username ? `Username: ${username}` : "Loading..."}
      </p>
    </div>
  );
};

export default UserName;
