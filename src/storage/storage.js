export const tg = window.Telegram.WebApp;
export const userName = tg.initDataUnsafe.user?.username;
export const userId = tg.initDataUnsafe.user?.id;

export const user = {
  coin: 154003,
  farm: 24023,
  time: 5,
};

export const headerTokenInfo = [
  // { name: "Токены", info: "320", color: "#5A87FC" },
  { name: "Покупки", info: "122", color: "#03CEA4" },
  { name: "Продажы", info: "410", color: "#FF5A30" },
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
export const dataChartToken = {
  labels: [
    "LAUNCH PAD",
    "DEXs LISTING",
    "DROP",
    "STAKE",
    "MARKETING",
    "DEVELOPER",
  ],
  datasets: [
    {
      data: [300, 50, 100, 350, 500, 150],
      backgroundColor: [
        "#bd725f",
        "#cfb069",
        "#26a3df",
        "#5bb27e",
        "#775bb2",
        "#b25b5b",
      ],
      redraw: true,
      hoverOffset: 10,
      borderWidth: 0,
      cutout: "45%",
      radius: "100%",
    },
  ],
};
