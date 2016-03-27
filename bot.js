var token = '201063148:AAH7H5X2sJgj78DhtFU7kNHX5TvyKf_w-Q0';

var Bot = require('node-telegram-bot-api'),
var bot = new Bot(token);

bot.setWebHook('https://api.telegram.org/bot' + bot.token);
console.log('bot server started...');



bot.onText(/^\/say_hello (.+)$/, function (msg, match) {
  var name = match[1];
  bot.sendMessage(msg.chat.id, 'Hello ' + name + '!').then(function () {
    // reply sent!
  });
});


bot.onText(/^\/sum((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].trim().split(/\s+/).forEach(function (i) {
    result += (+i || 0);
  })
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
  });
});
