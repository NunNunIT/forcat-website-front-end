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

function convertDateToFormatHHMMDDMMYYYY(date: Date): string {
  const locales = "vi-VN";
  const timeOptions: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit" };
  const dateOptions: Intl.DateTimeFormatOptions = { year: "numeric", month: "2-digit", day: "2-digit", };
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

export {
  parseNumToCurrencyStr, cleanDateFormatInput, convertDateFormatYMD, convertDateFormat,
  convertOrderStatusToStr, isActiveClass, convertDateToFormatHHMMDDMMYYYY, convertPaymentToStr,
  convertOrderStatusToIconData,
};

