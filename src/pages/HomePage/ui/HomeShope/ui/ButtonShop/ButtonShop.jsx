import styles from "./ButtonShop.module.scss";

const ButtonShop = ({ price, icon, decs, url, type }) => {

  function openLinkTg() {
    if (window.Telegram && window.Telegram.WebApp) {
      const tg = window.Telegram.WebApp;
      if (type === "bot") {
        tg.sendData(url);
        tg.close();
      } else if (type === "link") {
        tg.openTelegramLink(url);
      } else {
        console.error("Unknown type or Telegram WebApp is not defined");
      }
    } else {
      console.error("Telegram WebApp is not available");
    }
  }

  return (
    <button
      onClick={openLinkTg}
      className={styles["button-shop"]}
    >
      <div className={styles.icon}>
        <img src={icon} alt="icon" />
        {price && <span>{price}</span>}
      </div>
      <span>{decs}</span>
    </button>
  );
};

export default ButtonShop;
