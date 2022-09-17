const accountSid = 'ACe3608a47dd5752bc33ebe4d884eb826a'; // Your Account SID from www.twilio.com/console
const authToken = 'e2ba56fab278162d744e28b76ed065ee'; // Your Auth Token from www.twilio.com/console

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

let message = 'click this link www.google.com'


client.messages
  .create({
    body: message,
    to: '+12142288513', // Text this number
    from: '+18149925014', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));