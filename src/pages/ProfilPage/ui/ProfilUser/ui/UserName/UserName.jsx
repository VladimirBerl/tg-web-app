import { useEffect, useState } from "react";
import styles from "./UserName.module.scss";

const UserName = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const usernames = window.Telegram.WebApp.initDataUnsafe.user.username;
    setUsername(usernames);
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
