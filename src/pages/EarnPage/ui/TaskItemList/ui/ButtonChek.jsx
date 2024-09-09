import { Button } from "@/shared/ui/Buttom";
import { useLazyGetCheckTaskCompleteQuery } from "@/app/api";
import { useState, useEffect, useCallback } from "react";
import { useUser } from "@/app/context/UserContext";
import { ModalInfo } from "@/shared/ui/ModalInfo";
import { useModal } from "@/shared/hooks/modal.js";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg.js";

const ButtonChek = ({ url, id }) => {
  const buttonId = `taskButtonState${id}`; // Уникальный идентификатор для каждой кнопки
  const { user } = useUser();
  const [status, setStatus] = useState(false);
  const [buttonText, setButtonText] = useState("Перейти");
  const [loading, setLoading] = useState(false);
  const [getCheckTaskComplete] = useLazyGetCheckTaskCompleteQuery();
  const { isOpen, toggle } = useModal();

  // Функция для проверки статуса задачи
  const chekSatusTask = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await getCheckTaskComplete({
        id: user.id_telegram,
        id_task: id,
      });
      setStatus(data.complete);
      if (data.complete) {
        setButtonText("Задача выполнена");
      }
    } catch (error) {
      console.log(error);
      setButtonText("Ошибка");
    } finally {
      setLoading(false);
    }
  }, [getCheckTaskComplete, user.id_telegram, id]);

  // Логика обработки состояния кнопки и работы с localStorage
  const handleClick = () => {
    if (buttonText === "Перейти") {
      location.href = url;
      localStorage.setItem(buttonId, "Проверить");
      setButtonText("Проверить");
    } else if (buttonText === "Проверить") {
      chekSatusTask();
      if (!status) {
        toggle(); // Открываем модальное окно
        handlerVibrationTg()
        setTimeout(() => {
          setButtonText("Еще раз");
          toggle(); // Закрываем модальное окно
        }, 2000);
      }
    } else if (buttonText === "Еще раз") {
      setButtonText("Перейти");
      localStorage.setItem(buttonId, "Перейти");
    }
  };

  useEffect(() => {
    // Получаем значение кнопки из localStorage
    const storedButtonText = localStorage.getItem(buttonId) || "Перейти";
    setButtonText(storedButtonText);

    // Проверяем статус задачи при монтировании компонента
    chekSatusTask();
  }, [buttonId, chekSatusTask]);

  return (
    <div>
      {status ? (
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
          click={handleClick}
        >
          {loading ? "Загрузка..." : buttonText}
        </Button>
      )}
      {isOpen && <ModalInfo>Задача не выполнена</ModalInfo>}
    </div>
  );
};

export default ButtonChek;
