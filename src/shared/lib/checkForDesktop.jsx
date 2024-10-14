import { useEffect } from "react";
import { TELEGRAM } from "@/shared/const/telegramApi";

function checkForDesktop() {
  const isDesktop =
    TELEGRAM.platform === "tdesktop" &&
    !/Mobi|Android/i.test(navigator.userAgent);
  if (isDesktop) {
    useEffect(() => {
      setTimeout(() => {
        TELEGRAM.close();
      }, 5000);
    }, []);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 20,
        }}
      >
        Это приложение доступно только на мобильных устройствах.
      </div>
    );
  }
}

export default checkForDesktop;
