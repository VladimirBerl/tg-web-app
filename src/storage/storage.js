export const tg = window.Telegram.WebApp;
export const userName = tg.initDataUnsafe.user?.username;
export const userId = tg.initDataUnsafe.user?.id;

export const user = {
  coin: 154003,
  farm: 24023,
  time: 5,
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
