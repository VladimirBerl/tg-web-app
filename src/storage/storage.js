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
[
  {
      "id": 1,
      "count_tasks": 3,
      "name": "subscribe",
      "tasks": [
          {
              "id": 1,
              "description": "Подписаться на канал BUYER",
              "url": "https://t.me/Buyer_Marketplace"
          },
          {
              "id": 3,
              "description": "Подписаться на канал EFT психология ",
              "url": "https://t.me/EFT_Russia_chat"
          },
          {
              "id": 2,
              "description": "Подписаться на канал ДПМГ",
              "url": "https://t.me/dpdg_emdr_free"
          }
      ]
  },
  {
      "id": 2,
      "count_tasks": 2,
      "name": "games",
      "tasks": [
          {
              "id": 12,
              "description": "Empire X",
              "url": "https://t.me/empirebot"
          },
          {
              "id": 13,
              "description": "Magnilove",
              "url": "https://t.me/Magnilove_bot"
          }
      ]
  },
  {
      "id": 3,
      "count_tasks": 2,
      "name": "watch",
      "tasks": [
          {
              "id": 5,
              "description": "Видео про планировку задач",
              "url": "https://www.youtube.com/watch?v=bQpfvz1bIoE"
          },
          {
              "id": 4,
              "description": "Посмотреть видео про python",
              "url": "https://www.youtube.com/watch?v=FfitVqUAVl8"
          }
      ]
  },
  {
      "id": 4,
      "count_tasks": 1,
      "name": "like",
      "tasks": [
          {
              "id": 6,
              "description": "Поставить лайк в группу ВК",
              "url": "https://vk.com/tennisprimesport?w=wall-212808533_4225824"
          }
      ]
  },
  {
      "id": 5,
      "count_tasks": 2,
      "name": "comment",
      "tasks": [
          {
              "id": 7,
              "description": "Оставить комментарий к товару на OZON",
              "url": "https://www.ozon.ru/product/lofery-salamander-1635651513/?avtc=1&avte=2&avts=1727092592"
          },
          {
              "id": 8,
              "description": "Оставить комментарий к товару на WB",
              "url": "https://www.wildberries.ru/catalog/7213826/detail.aspx"
          }
      ]
  },
  {
      "id": 6,
      "count_tasks": 2,
      "name": "save",
      "tasks": [
          {
              "id": 10,
              "description": "Добавить в избранное товар на OZON",
              "url": "https://www.ozon.ru/product/posudomoechnaya-mashina-vstraivaemaya-kuppersberg-gsm-4574-modifikatsiya-2024-goda-382762300/?avtc=1&avte=4&avts=1727092517"
          },
          {
              "id": 9,
              "description": "Добавить в избранное товар на WB",
              "url": "https://www.wildberries.ru/catalog/163352671/detail.aspx"
          }
      ]
  },
  {
      "id": 7,
      "count_tasks": 1,
      "name": "bonus",
      "tasks": [
          {
              "id": 11,
              "description": "Подписаться на группу ",
              "url": "https://t.me/iforextest"
          }
      ]
  },
  {
      "id": 8,
      "count_tasks": 0,
      "name": "completed",
      "tasks": []
  }
]

export const userRank = {
  // id текущего ранга
  id: 1, 
  rank: "stone",
  // lvl уровень выполненных задач т.с выполнено например 0 из 10 текущего ранга 
  lvl: 0,
  conditions: [
    {
      id: 1,
      type: "coins",
      description: "Заработать 100 000 монет",
      target: 100000,
    },
    {
      id: 2,
      type: "friends",
      description: "Пригласить 1 друга",
      target: 1,
    },
    {
      id: 3,
      type: "task",
      description: "Выполнить 10 заданий",
      target: 10,
    },
  ],
};
