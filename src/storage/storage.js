export const tg = window.Telegram.WebApp;
export const userName = tg.initDataUnsafe.user?.username;

export const headerTokenInfo = [
  { name: "Токены", info: "320", color: "#03CEA4" },
  { name: "Покупки", info: "122", color: "#5A87FC" },
  { name: "Продажы", info: "410", color: "#FFD370" },
];

export const interactionGroup = [
  { name: "Покупатели", info: "574" },
  { name: "Продавцы", info: "234" },
]