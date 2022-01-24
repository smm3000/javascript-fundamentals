
function notifyByEmail (email) {
  return `Email sent to: ${email}`;
}

function notifyByText (phone_number) {
  return `Text sent to: ${phone_number}`;
}

function notify (string, medium) {
  return medium(string);
}



console.log(notifyByEmail ('test@test.co.uk'));

console.log(notifyByText (12345678901));

console.log(notify('hello@makers.tech.test', notifyByEmail));

console.log(notify('+100000000000', notifyByText));
