import { Button } from "@/shared/ui/Buttom";
import { useLazyGetCheckTaskCompleteQuery } from "@/app/api";
import { useState, useEffect } from "react";
import { useUser } from "@/app/context/UserContext";

const ButtonChek = ({ url, id }) => {
  const { user } = useUser();
  const [status, setStatus] = useState(false);
  const [buttonText, setButtonText] = useState("");
  const [getCheckTaskComplete] = useLazyGetCheckTaskCompleteQuery();

  const chekSatusTask = async () => {
    try {
      const { data } = await getCheckTaskComplete({
        id: user.id_telegram,
        id_task: id,
      });
      setStatus(data.complete);
      setButtonText("Выполнено");
    } catch (error) {
      console.log(error);
      setButtonText("Ошибка");
    }
  };

  const heandleClick = () => {
    localStorage.taskButtonSate = "Проверить";
    setButtonText("Проверить");
    if (buttonText === "Перейти") {
      location.href = url;
    }
    if (buttonText === "Проверить") {
      chekSatusTask();
      delete localStorage.taskButtonSate;
    }
  };

  useEffect(() => {
    setButtonText(localStorage?.taskButtonSate || "Перейти");
    chekSatusTask();
  }, []);

  return (
    <Button
      disabled={status}
      padding="8px"
      gradient="true"
      sizetext="12px"
      click={heandleClick}
    >
      {buttonText}
    </Button>
  );
};

export default ButtonChek;
