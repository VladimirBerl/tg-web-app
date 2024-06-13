import { useEffect } from "react";

const tg = window.Telegram.WepApp;
function App() {
  
  useEffect(() => {
    tg.ready();
  }, []);

  const onClose = () => {
    tg.close();
  };

  return <button onClick={onClose}>ЗАКРЫТЬ</button>;
}

export default App;
