import HomeTop from "../../components/HomeTop/HomeTop";
import HomeIphone from "../../components/HomeIphone/HomeIphone";
import styled from "./HomePage.module.scss";
import { useState, useEffect } from "react";
const tg = window.Telegram.WebApp;
export default function HomePage() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    // Убедитесь, что Telegram WebApp API доступен
    if (window.Telegram.WebApp) {
      // Получение информации о пользователе
      const tg = window.Telegram.WebApp;
      const username = tg.initDataUnsafe.user?.username;
      setUsername(username);
    } else {
      console.error("Telegram WebApp API недоступен");
    }
  }, []);
  return (
    <div>
      <HomeTop />
      <HomeIphone />
      <div>
        {username ? (
          <h1>Ваш ник: {username}</h1>
        ) : (
          <h1>Ник пользователя не найден</h1>
        )}
      </div>
    </div>
  );
}
