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
];

export const dataChartOne = {
  datasets: [
    {
      name: "Платные посты",
      price: "2200",
      data: [40, 60],
      backgroundColor: ["#FF5A30", "#ff593045"],
      borderWidth: 0,
      redraw: true,
      cutout: "85%",
    },
  ],
};
export const dataChartTwo = {
  datasets: [
    {
      name: "Бесплатные посты",
      data: [90, 10],
      backgroundColor: ["#F89828", "#F8982845"],
      borderWidth: 0,
      redraw: true,
      cutout: "85%",
    },
  ],
};
export const dataChartTree = {
  datasets: [
    {
      name: "Реклама",
      price: "3040",
      data: [50, 50],
      backgroundColor: ["#03CEA4", "#03CEA445"],
      borderWidth: 0,
      redraw: true,
      cutout: "85%",
    },
  ],
};
