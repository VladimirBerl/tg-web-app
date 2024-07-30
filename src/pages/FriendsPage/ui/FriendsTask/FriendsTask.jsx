import styled from "./FriendsTask.module.scss";

const FriendsTask = () => {
  return (
    <div className={styled["invite-friends"]}>
      <span className={styled.title}>
        Приглашайте друзей для получения бонусов
      </span>
      <div className={styled["invite-wrapper"]}>
        <div className={styled.gift}>
          <div className={styled["gift-box"]}>
            <div className={styled["gift-img"]}>
              <img src="/icon/gift-box.svg" alt="gift-box" />
            </div>
            <span className={styled.task}>Telegram User</span>
            <div className={styled["price-task"]}>
              <div className={styled["coin-img"]}>
                <img src="/icon/coin.svg" alt="coin" />
              </div>
              <span>+5 000</span>
            </div>
          </div>
          <div className={styled["gift-box"]}>
            <div className={styled["gift-img"]}>
              <img src="/icon/gift-box-two.svg" alt="gift-box" />
            </div>
            <span className={styled.task}>Telegram User</span>
            <div className={styled["price-task"]}>
              <div className={styled["coin-img"]}>
                <img src="/icon/coin.svg" alt="coin" />
              </div>
              <span>+5 000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsTask;
