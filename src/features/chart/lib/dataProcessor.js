
function transformation(data) {
  const dataTemplate = {
    datasets: [
      {
        name: "Посты за рубли",
        price: "1450",
        data: [50, 50],
        backgroundColor: ["#088E35", "#064225"],
        borderWidth: 0,
        redraw: true,
        cutout: "90%",
      },
    ],
  };
  console.log(data.find((item) => item.length > 0));
}

export const dataProcessor = async () => {
  try {
    console.log(data);
    if (error) {
      new Error(error);
    }
    if (data) {
      transformation(data);
    }
  } catch (error) {
    console.log(error);
  }
};
