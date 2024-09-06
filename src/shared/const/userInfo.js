const userTg = window.Telegram.WebApp.initDataUnsafe.user;

export const user = {
  id_telegram: userTg?.id ? userTg?.id : 1,
  user_name: userTg?.username ? userTg?.username : "Name",
  registration_date: "2024-08-25",
  active: true,
};
