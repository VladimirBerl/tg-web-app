import "./styles/index.css";
import Routing from "@/pages";
import { useCheckAndCreateUser } from "@/app/services/userService";
import { useEffect } from "react";
import { user } from "@/shared/const/userInfo.js";

const App = () => {
  const checkAndCreateUser = useCheckAndCreateUser();

  useEffect(() => {
    const initUser = async () => {
      try {
        await checkAndCreateUser(user);
      } catch (error) {
        console.error("Failed to initialize user:", error);
      }
    };

    initUser();
  }, []);

  return <Routing />;
};

export default App;
