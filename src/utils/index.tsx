function printHello() {
  console.log("Helllllllo");
}

function parseNumToCurrencyStr(price: number) {
  return price.toLocaleString("vi-VN");
}

export { printHello, parseNumToCurrencyStr };
