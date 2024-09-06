import "./styles/index.css";
import Routing from "@/pages";
import { useCheckAndCreateUser } from "@/app/services/userService";
import { useEffect, useState } from "react";
import { user } from "@/shared/const/userInfo.js";
import Loading from "../widgets/Loading/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);
  const checkAndCreateUser = useCheckAndCreateUser();

  useEffect(() => {
    const initUser = async () => {
      try {
        await checkAndCreateUser(user);
      } catch (error) {
        console.error("Failed to initialize user:", error);
      } finally {
        setLoading(false);
      }
    };

    initUser();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return <Routing />;
};

export default App;
