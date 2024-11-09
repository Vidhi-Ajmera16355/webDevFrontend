let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function square(x) {
  return x * x;
}
const squareArr = [];
for (let ele of a) {
  squareArr.push(square(ele));
}
console.log(squareArr);
