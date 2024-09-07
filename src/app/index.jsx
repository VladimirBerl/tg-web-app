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
  const [text, setText] = useState("");

  const initUser = async () => {
    try {
      const respons = await checkAndCreateUser(userTg ? userTg : user);
      setText(JSON.stringify(respons));
      // setLoading(respons);
    } catch (error) {
      console.error("Failed to initialize user:", error);
    }
  };

  useEffect(() => {
    initUser();
  }, []);

  if (loading) {
    return <div>{text}</div>;
  }

  return <Routing />;
};

export default App;
