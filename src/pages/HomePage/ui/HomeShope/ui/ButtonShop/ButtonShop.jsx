import styles from "./ButtonShop.module.scss";

const ButtonShop = ({ price, icon, decs, url, disable, type }) => {
  function openLinkTg() {
    const tg = window.Telegram.WebApp;
    if (type === "bot") {
      tg.sendData(url);
    } else if (type === "link") {
      tg.openTelegramLink(url);
    } else {
      console.error("Telegram WebApp is not defined");
    }
  }
  return (
    <button
      onClick={openLinkTg}
      disabled={disable}
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