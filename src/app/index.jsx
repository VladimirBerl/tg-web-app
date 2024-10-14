import "./styles/index.css";
import Routing from "@/pages";
import { useCheckAndCreateUser } from "@/app/services/userService";
import { useEffect, useState } from "react";
import Loading from "../widgets/Loading/Loading";
import { TELEGRAM_USER, TELEGRAM } from "@/shared/const/telegramApi";
import checkForDesktop from "@/shared/lib/checkForDesktop";

const App = () => {
  const [loading, setLoading] = useState(true);
  const checkAndCreateUser = useCheckAndCreateUser();
  
  useEffect(() => {
    checkForDesktop();
  }, []);

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
