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

export const categories = [
  {
    id: 1,
    countTasks: 21,
    categoryName: "subscribe",
    categoryIcon: "/icon/task.svg",
    tasks: [
      {
        id: 1,
        description: "Подписаться на канал Buyer_Marketplace",
        url: "https://t.me/Buyer_Marketplace",
        type_task: "subscribe",
      },
    ],
  },
  {
    id: 2,
    countTasks: 2,
    categoryName: "comment",
    categoryIcon: "/icon/task.svg",
    tasks: [
      {
        id: 2,
        description: "Коментарий на пост",
        url: "https://t.me/Buyer_Marketplace",
        type_task: "subscribe",
      },
    ],
  },
  {
    id: 3,
    countTasks: 2,
    categoryName: "like",
    categoryIcon: "/icon/video.svg",
    tasks: [
      {
        id: 3,
        description: "Лайк на пост",
        url: "https://t.me/Buyer_Marketplace",
        type_task: "subscribe",
      },
    ],
  },
  {
    id: 4,
    countTasks: 2,
    categoryName: "save",
    categoryIcon: "/icon/bonus.svg",
    tasks: [
      {
        id: 4,
        description: "Сохранить что-то...",
        url: "https://t.me/Buyer_Marketplace",
        type_task: "subscribe",
      },
    ],
  },
  {
    id: 5,
    countTasks: 2,
    categoryName: "watch",
    categoryIcon: "/icon/watch-w.svg",
    tasks: [
      {
        id: 5,
        description: "Посмотреть видео на Buyer",
        url: "https://t.me/Buyer_Marketplace",
        type_task: "subscribe",
      },
    ],
  },
  {
    id: 6,
    countTasks: 2,
    categoryName: "completed",
    categoryIcon: "/icon/ready.svg",
  },
];

export const userRank = {
  name: "stone",
  lvl: 1,
  countCoin: 0,
};
