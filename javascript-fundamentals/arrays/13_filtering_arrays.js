function checkLength(phoneNumber) {
    return phoneNumber.length <= 10;
}

function filterLongNumbers(phoneNumbers) {
    return phoneNumbers.filter(checkLength);
}