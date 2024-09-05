// export const user = {
//   id_telegram: 11,
//   user_name: "ars",
//   registration_date: "2024-08-25",
//   active: true,
//   // count_coins: 65000,
//   // count_invited_friends: 2,
//   // count_pharmd: 65000,
//   // friends: [
//   //   { user_name: "lena", count_coins: 0, level: 0 },
//   //   { user_name: "dima", count_coins: 0, level: 0 },
//   // ],
//   // level: 0,
//   // purchase_count: 0,
//   // sale_count: 0,
//   // tasks: [],
// };
const userTg = window.Telegram.WebApp.initDataUnsafe.user;

export const user = {
  id_telegram: userTg.id,
  user_name: userTg.username,
  registration_date: "2024-08-25",
  active: true,
};
