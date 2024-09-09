import { Button } from "@/shared/ui/Buttom";
import { useLazyGetCheckTaskCompleteQuery } from "@/app/api";
import { useState, useEffect } from "react";
import { useUser } from "@/app/context/UserContext";
import { ModalInfo } from "@/shared/ui/ModalInfo";
import { useModal } from "@/shared/hooks/modal.js";

const ButtonChek = ({ url, id }) => {
  const buttonId = `taskButtonSate${id}`;
  const { user } = useUser();
  const [status, setStatus] = useState(false);
  const [buttonText, setButtonText] = useState("");
  const [getCheckTaskComplete] = useLazyGetCheckTaskCompleteQuery();
  const { isOpen, toggle } = useModal();

  const chekSatusTask = async () => {
    try {
      const { data } = await getCheckTaskComplete({
        id: user.id_telegram,
        id_task: id,
      });
      setStatus(data.complete);
    } catch (error) {
      console.log(error);
      setButtonText("Ошибка");
    }
  };

  const heandleClick = () => {
    if (buttonText === "Перейти") {
      location.href = url;
      localStorage.buttonId = "Проверить";
      // setTimeout(() => {
      //   console.log("work");

      //   delete localStorage.buttonId;
      //   setButtonText("Перейти");
      // }, 5000);
      setButtonText(localStorage.buttonId);
    }
    if (buttonText === "Проверить") {
      delete localStorage.buttonId;
      chekSatusTask();
      if (!status) {
        toggle();
        setTimeout(() => {
          console.log("work");
          setButtonText("Еще раз");
          toggle();
        }, 1000);
      }
    }
    if (buttonText === "Еще раз") {
      setButtonText("Перейти");
    }
  };

  useEffect(() => {
    setButtonText(localStorage?.buttonId || "Перейти");
    chekSatusTask();
  }, []);

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
          disabled={status}
          padding="8px"
          gradient="true"
          sizetext="12px"
          click={heandleClick}
        >
          {buttonText}
        </Button>
      )}
      {isOpen && <ModalInfo>Задача не выполнена</ModalInfo>}
    </div>
  );
};

export default ButtonChek;
