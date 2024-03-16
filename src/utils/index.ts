function parseNumToCurrencyStr(price: number): string {
  return price.toLocaleString("vi-VN");
}

function convertDateStrToDDMMYYYY(dateStr: string): string {
  return dateStr.split('-').reverse().join('/')
}

export { parseNumToCurrencyStr, convertDateStrToDDMMYYYY };