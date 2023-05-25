/**
 * Menghasilkan persegi empat dengan panjang 5 unit ke terminal
 * @namespace Latihan
 * @method printSquare
 * @param {Number} length panjang
 */
function printSquare(length) {
  // TODO: Gunakan looping untuk menghasilkan panjang dan lebar persegi empat
  for (let index = 0; index < length; index++) {
    console.log("* * * * *");
  }
}
module.exports = printSquare;
// printSquare(5);
