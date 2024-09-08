import "./styles/index.css";
import Routing from "@/pages";
import { useCheckAndCreateUser } from "@/app/services/userService";
import { useEffect, useState } from "react";
import { user } from "@/shared/const/userInfo.js";
import Loading from "../widgets/Loading/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);
  const checkAndCreateUser = useCheckAndCreateUser();
  const userTg = window.Telegram.WebApp.initDataUnsafe.user?.id;
  console.log(userTg);
  console.log(user.id_telegram)

  const initUser = async () => {
    try {
      const respons = await checkAndCreateUser(
        userTg ? userTg : user.id_telegram
      );
      setLoading(respons);
    } catch (error) {
      console.error("Failed to initialize user:", error);
    }
  };

  useEffect(() => {
    initUser();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <Routing />;
};

export default App;
