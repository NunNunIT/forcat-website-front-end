function parseNumToCurrencyStr(price: number): string {
  return price.toLocaleString("vi-VN");
}

function cleanDateFormatInput(inputDate: string): string {
  // Use regular expression to remove unwanted characters
  return inputDate.replace(/[^\d/]/g, "");
}

function convertDateFormatYMD(inputDate: string): string {
  // Use cleanDateFormatInput function to remove unwanted characters
  var cleanedDate = cleanDateFormatInput(inputDate);

  // Convert date format to "yyyy-MM-dd" before assigning to input
  var parts = cleanedDate.split("/");

  var result = parts[2] + "-" + parts[1] + "-" + parts[0];

  return result;
}

function convertDateFormat(inputDate: string): string {
  if (!inputDate) {
    return "";
  }
  var parts = inputDate.split("-");
  return parts[2] + "/" + parts[1] + "/" + parts[0];
}

function convertOrderStatusToStr(order_status: string): string {
  switch (order_status.toLowerCase()) {
    case "all":
      return "Tất cả";
    case "unpaid":
      return "Chờ thanh toán";
    case "delivering":
      return "Đang giao";
    case "finished":
      return "Hoàn thành";
    case "cancel":
      return "Đã hủy";
  }
  return "Unexpected Order Status";
}

function isActiveClass(src_str: string, des_str: string): string {
  return src_str === des_str ? "is-active" : "";
}

function isActiveClassWithBool(bool: boolean): string {
  return bool ? "is-active" : "";
}

function convertDateStrToDDMMYYYY(dateStr: string): string {
  return dateStr.split("-").reverse().join("/");
}

function convertDateToFormatHHMMDDMMYYYY(date: Date): string {
  const locales = "vi-VN";
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  return `${date.toLocaleTimeString(locales, timeOptions)} ${date.toLocaleDateString(locales, dateOptions)}`;
}

function convertPaymentToStr(payment_type: string): string {
  switch (payment_type.toLowerCase()) {
    case "credit_card":
      return "thẻ tín dụng";
  }

  return "Unexpected Payment Type";
}

function convertOrderStatusToIconData(order_status: string): string {
  switch (order_status.toLowerCase()) {
    case "unpaid":
      return "payment";
    case "delivering":
      return "local_shipping";
    case "finished":
      return "done_all";
    case "cancel":
      return "cancel";
  }
  return "Unexpected Order Status";
}

function convertMoneyToNumber(money: string): number {
  return Number(
    money.replaceAll("đ", "").replaceAll(".", "").replaceAll("&nbsp;", "")
  );
}

function convertNumberToMoney(number: number): string {
  // Check if the provided number is valid
  if (isNaN(number)) {
    return "Invalid number";
  }

  // Format the number as currency using toLocaleString
  const currency = number
    .toLocaleString("vi-VN", { style: "currency", currency: "VND" })
    .replace(/₫/g, "đ");

  // Return the formatted currency string
  return currency;
}

function convertDateToHourDayMonthYear(dateString: string): string {
  const date = new Date(dateString);

  const hours: string = ("0" + date.getUTCHours()).slice(-2);
  const minutes: string = ("0" + date.getUTCMinutes()).slice(-2);

  const day: string = ("0" + date.getUTCDate()).slice(-2);
  const month: string = ("0" + (date.getUTCMonth() + 1)).slice(-2);
  const year: number = date.getUTCFullYear();

  return `${hours}:${minutes} - ${day}/${month}/${year}`;
}

function isValidEmail(email: string): boolean {
  // Regex pattern để kiểm tra định dạng email
  const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Kiểm tra xem email có phù hợp với định dạng không
  return emailPattern.test(email);
}

export {
  parseNumToCurrencyStr,
  cleanDateFormatInput,
  convertDateFormatYMD,
  convertDateFormat,
  convertMoneyToNumber,
  convertNumberToMoney,
  convertDateToHourDayMonthYear,
  isValidEmail,
  convertOrderStatusToStr,
  isActiveClass,
  convertDateToFormatHHMMDDMMYYYY,
  convertDateStrToDDMMYYYY,
  convertPaymentToStr,
  convertOrderStatusToIconData,
  isActiveClassWithBool,
};
