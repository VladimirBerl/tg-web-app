export default async function preloadResources(setIsLoading) {
  const images = [
    "/images/plan-iphone.png",
    "/icon/bmt-token-min.png",
    "/icon/shop.svg",
    "/icon/wallet.svg",
    "/icon/category.svg",
    "/icon/add.svg",
  ];

  images.map((src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve({ src, status: "ok" });
      img.onerror = () => reject({ src, status: "error" });
    });
  });

  try {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  } catch (error) {
    console.error("Ошибка загрузки ресурсов:", error);
    setIsLoading(false);
  }
}
