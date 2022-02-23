
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let mas = []
  if(!matrix) return mas;

  matrix.map((item, index) => {
    if (index%2 == 0) {
      console.log('%2 = 0',item);
      mas.push(item);
    }
    else {
            mas.push(item.reverse());
    }
  });

  return mas.flat();
}
