import { Button } from "@/shared/ui/Buttom";
import { useLazyGetCheckTaskCompleteQuery } from "@/app/api";
import { useState, useEffect, useCallback } from "react";
import { useUser } from "@/app/context/UserContext";
import { ModalInfo } from "@/shared/ui/ModalInfo";
import { useModal } from "@/shared/hooks/modal.js";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg.js";

const ButtonCheck = ({ url, id }) => {
  const { user } = useUser();
  const { isOpen, toggle } = useModal();
  const [getCheckTaskComplete] = useLazyGetCheckTaskCompleteQuery();

  const [isTaskComplete, setIsTaskComplete] = useState(false);
  const [buttonText, setButtonText] = useState("Перейти");
  const [isLoading, setIsLoading] = useState(false);

  const buttonStorageKey = `taskButtonState${id}`;

  const fetchTaskStatus = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await getCheckTaskComplete({
        id: user.id_telegram,
        id_task: id,
      });

      setIsTaskComplete(data.complete);

      if (data.complete) {
        setButtonText("Задача выполнена");
      }
    } catch (error) {
      console.error("Error checking task status:", error);
      setButtonText("Ошибка");
    } finally {
      setIsLoading(false);
    }
  }, [getCheckTaskComplete, user.id_telegram, id]);

  const handleButtonClick = () => {
    switch (buttonText) {
      case "Перейти":
        navigateToTask();
        break;
      case "Проверить":
        checkTaskCompletion();
        break;
      case "Еще раз":
        resetButtonState();
        break;
      default:
        break;
    }
  };

  const navigateToTask = () => {
    location.href = url;
    updateButtonText("Проверить");
  };

  const checkTaskCompletion = () => {
    fetchTaskStatus();
    if (!isTaskComplete) {
      resetButtonState();
      toggle();
      handlerVibrationTg();
    }
  };

  const resetButtonState = () => {
    updateButtonText("Перейти");
  };

  const updateButtonText = (text) => {
    setButtonText(text);
    localStorage.setItem(buttonStorageKey, text);
    setTimeout(() => localStorage.removeItem(buttonStorageKey), 5000);
  };

  useEffect(() => {
    const storedText = localStorage.getItem(buttonStorageKey) || "Перейти";
    setButtonText(storedText);
    fetchTaskStatus();
  }, [buttonStorageKey, fetchTaskStatus]);

  return (
    <div>
      {isTaskComplete ? (
        <img
          style={{ width: "28px", height: "28px" }}
          src="/icon/ready.svg"
          alt="ready"
        />
      ) : (
        <Button
          padding="8px"
          gradient="true"
          sizetext="12px"
          eventclick={handleButtonClick}
        >
          {isLoading ? "Загрузка..." : buttonText}
        </Button>
      )}
      {isOpen && <ModalInfo>Задача не выполнена{id}</ModalInfo>}
    </div>
  );
};

export default ButtonCheck;
