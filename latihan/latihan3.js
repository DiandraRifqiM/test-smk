/**
 * Menghasilkan persegi dengan tinggi dan lebar yang ditentukan
 * @namespace Latihan
 * @method printRectangle
 * @param {Number} length lebar
 * @param {Number} height tinggi
 */
function printRectangle(length, height) {
  // TODO: gunakan looping untuk membuat persegi panjang
  for (let index = 0; index < height; index++) {
    console.log("* ".repeat(length).trimEnd());
  }
}

module.exports = printRectangle;
