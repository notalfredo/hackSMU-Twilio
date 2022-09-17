const sendMessage = (passed_accountSid , passed_authToken , message) =>{
  const accountSid = passed_accountSid; // Your Account SID from www.twilio.com/console
  const authToken = passed_authToken; // Your Auth Token from www.twilio.com/console

  const twilio = require('twilio');
  const client = new twilio(accountSid, authToken);

  client.messages
    .create({
      body: message,
      to: '+12142288513', // Text this number
      from: '+19032317677', // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));

}
sendMessage('ACc5da29b9cb0b3710c2c9386f8a50b026' , '0dfdd4119e53ddf99b40a86e9cbb2b4d' ,
   "hello wolcome from function call" );