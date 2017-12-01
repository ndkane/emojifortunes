var Twit = require("twit");
var TwitterBot = require("node-twitterbot").TwitterBot;
var Bot = new TwitterBot({
    consumer_key: process.env.BOT_CONSUMER_KEY,
    consumer_secret: process.env.BOT_CONSUMER_SECRET,
    access_token: process.env.BOT_ACCESS_TOKEN,
    access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

//Setting up a user stream
var stream = Bot,stream('user');

// Anytime someone follows me
stream.on('follow', followed);


// Tweet at intervals of every five minutes

tweetIt();
setInterval(tweetIt, 1000*60*5);

function tweetIt(){

    var phraseArray = ["Tweet me your last ten emojis to see into your future...",
        "10 emojis is all I need...",
        "Cross my palm with emojis to see into the future...",
        "Cross my palm with emojis to see what you need to do...",
        "Emoji, emoji, what do they mean?"
    ];

    function chooseRandom(myArray) {
        return myArray[Math.floor(Math.random() * myArray.length)];
    }
    var phrase = chooseRandom(phraseArray);
    Bot.tweet(phrase);
}

