import "./styles/index.css";
import Routing from "@/pages";
import { useCheckAndCreateUser } from "@/app/services/userService";
import { useEffect, useState } from "react";
import Loading from "../widgets/Loading/Loading";
import { TELEGRAM_USER, TELEGRAM } from "@/shared/const/telegramApi";

const App = () => {
  const [loading, setLoading] = useState(true);
  const checkAndCreateUser = useCheckAndCreateUser();

  const isDesktop =
    TELEGRAM.platform === "tdesktop" &&
    !/Mobi|Android/i.test(navigator.userAgent);

  if (isDesktop) {
    useEffect(() => {
      setTimeout(() => {
        TELEGRAM.close();
      }, 5000);
    }, []);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 20,
        }}
      >
        Это приложение доступно только на мобильных устройствах.
      </div>
    );
  }

  const initUser = async () => {
    try {
      const respons = await checkAndCreateUser(TELEGRAM_USER.id);
      setLoading(respons);
    } catch (error) {
      console.error("Failed to initialize user:", error);
    }
  };

  useEffect(() => {
    initUser();
    TELEGRAM.expand();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <Routing />;
};

export default App;
