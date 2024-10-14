import "./styles/index.css";
import Routing from "@/pages";
import { useCheckAndCreateUser } from "@/app/services/userService";
import { useEffect, useState } from "react";
import Loading from "../widgets/Loading/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);
  const checkAndCreateUser = useCheckAndCreateUser();
  const userTg = window.Telegram.WebApp.initDataUnsafe.user?.id;

  if (window.Telegram.WebApp.platform === "desktop") {
    Telegram.WebApp.close();
    return <div>Это приложение доступно только на мобильных устройствах.</div>;
  }

  const initUser = async () => {
    try {
      const respons = await checkAndCreateUser(userTg);
      setLoading(respons);
    } catch (error) {
      console.error("Failed to initialize user:", error);
    }
  };

  useEffect(() => {
    initUser();
    window.Telegram.WebApp.expand();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <Routing />;
};

export default App;
