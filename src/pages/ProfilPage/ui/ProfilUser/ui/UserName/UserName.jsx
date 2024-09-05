import { useEffect, useState } from "react";
import styles from "./UserName.module.scss";

const UserName = ({ name }) => {
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      // Инициализируем Telegram WebApp
      window.Telegram.WebApp.ready();

      const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
      alert(`initDataUnsafe: ${JSON.stringify(initDataUnsafe)}`); // Показать данные через alert

      if (initDataUnsafe && initDataUnsafe.user) {
        const userIdFromTelegram = initDataUnsafe.user.id;
        alert(`User ID: ${userIdFromTelegram}`); // Показать ID через alert
        setUserId(userIdFromTelegram);
      } else {
        alert("User data not available in initDataUnsafe.");
      }
    } else {
      alert("Telegram WebApp API is not available.");
    }

    setLoading(false); // Завершаем загрузку
  }, []);

  return (
    <div>
      <p className={styles.name}>{name}</p>
      <p className={styles.name}>
        {loading ? "Loading..." : userId ? userId : "User ID not found"}
      </p>
    </div>
  );
};

export default UserName;
