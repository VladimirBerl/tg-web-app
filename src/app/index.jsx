import Routing from "@/pages";
import "./styles/index.css";

import { useCreateUserMutation } from "@/app/api/userApi.js";
import { useEffect } from "react";

const App = () => {
  // const [createUser, { isLoading, isSuccess, error }] = useCreateUserMutation();

  // useEffect(() => {
  //   createUser({
  //     id_telegram: 100,
  //     user_name: "test",
  //   });
  // }, [createUser]);

  return <Routing />;
};

export default App;
