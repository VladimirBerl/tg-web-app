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
      name: "Посты за монеты",
      price: "1450",
      data: [40, 60],
      backgroundColor: ["#C1A130", "#965C16"],
      borderWidth: 0,
      redraw: true,
      cutout: "85%",
    },
  ],
};
export const dataChartTwo = {
  datasets: [
    {
      name: "Посты за токены",
      price: "750",
      data: [90, 10],
      backgroundColor: ["#3F4CE3", "#111973"],
      borderWidth: 0,
      redraw: true,
      cutout: "85%",
    },
  ],
};
export const dataChartTree = {
  datasets: [
    {
      name: "Посты за рубли",
      price: "1450",
      data: [50, 50],
      backgroundColor: ["#088E35", "#064225"],
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

export const itemTasks = [
  {
    names: "Buyer",
    desc: "@TG_Buyer_bot",
    link: "https://t.me/TG_Buyer_bot",
    price: 2313,
    icon: "/ui/telegram.svg",
  },
  {
    names: "Buyer",
    desc: "@TG_Buyer_bot",
    link: "https://t.me/TG_Buyer_bot",
    price: 2313,
    icon: "/ui/telegram.svg",
  },
];
