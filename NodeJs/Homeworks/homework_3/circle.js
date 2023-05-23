const pi = 3;

const circleArea = (r) => {
  console.log(`Dairenin alanı : ${pi * r ** 2}`);
};

const circleCircumference = (r) => {
  console.log(`Dairenin çevresi : ${pi * r * 2}`);
};

module.exports = {
  circleArea,
  circleCircumference,
};
