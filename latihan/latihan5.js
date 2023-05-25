/**
 * Hasilkan nilai faktorial dari n
 * @namespace Latihan
 * @method factorial
 * @param {Number} n number
 * @return {Number} hasil faktorial
 */
function factorial(n) {
  // TODO: hasilkan nilai faktorial sebagai return value
  // apabila n < 0, maka hasilkan nilia undefined
  let num = 1;
  for (let index = n; index > 0; index--) {
    num = num * index;
  }

  if (n < 0) {
    return null;
  } else if (n == 0) {
    return 1;
  } else {
    return num;
  }
}
factorial(5);
module.exports = factorial;
