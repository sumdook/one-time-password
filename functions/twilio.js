const twilio = require('twilio');

const accountSid = 'ACa99b452357a8506e5a574e91cf17f08c';
cosnt authToken = 'ca7be17185ae6bc545473cf23a4d03ed';

module.exports = new twilio.Twilio(accountSid, authToken);