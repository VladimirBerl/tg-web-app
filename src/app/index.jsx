import "./styles/index.css";
import Routing from "@/pages";
import Loading from "../widgets/Loading/Loading";
import { useState, useEffect } from "react";
// import preloadResources from "@/shared/lib/preloadResources.js";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const [resources, setResources] = useState({});

  // useEffect(() => {
  //   preloadResources(setIsLoading, setResources);
  // }, []);

  if (isLoading) {
    return <Loading />;
  }
  return <Routing />;
};

export default App;
