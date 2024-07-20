export default async function preloadResources(setIsLoading) {
  const images = [
    "/images/star.png",
    "/icon/friends.svg",
    "/images/plan-Iphone.png",
    "/icon/task.svg",
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
    setTimeout(()=> {
      setIsLoading(false);
    }, 1000)
  } catch (error) {
    console.error("Ошибка загрузки ресурсов:", error);
    setIsLoading(false);
  }
}
