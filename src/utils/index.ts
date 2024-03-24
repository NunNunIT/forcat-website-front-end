function parseNumToCurrencyStr(price: number): string {
  return price.toLocaleString("vi-VN");
}

function cleanDateFormatInput(inputDate: string): string {
	// Use regular expression to remove unwanted characters
	return inputDate.replace(/[^\d/]/g, '');
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

function isValidEmail(email: string): boolean {
	// Regex pattern để kiểm tra định dạng email
	const emailPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	
	// Kiểm tra xem email có phù hợp với định dạng không
	return emailPattern.test(email);
  }

export { parseNumToCurrencyStr, cleanDateFormatInput, convertDateFormatYMD, convertDateFormat, isValidEmail};

