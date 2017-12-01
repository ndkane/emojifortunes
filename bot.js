var Twit = require("twit");
var TwitterBot = require("node-twitterbot").TwitterBot;
var Bot = new TwitterBot({
    consumer_key: process.env.BOT_CONSUMER_KEY,
    consumer_secret: process.env.BOT_CONSUMER_SECRET,
    access_token: process.env.BOT_ACCESS_TOKEN,
    access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});
var phraseArray = ["Tweet me your last ten emojis to see into your future...",
    "10 emojis is all I need...",
    "Cross my palm with emojis to see into the future...",
    "Cross my palm with emojis to see what you need to do..."
];

function chooseRandom(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
}
var phrase = chooseRandom(phraseArray) + ", Friend.";
Bot.tweet(phrase);

setInterval(function() {
    try {
        run();
    } catch (e) {
        console.log(e);
    }
}, 5000 * 60);
