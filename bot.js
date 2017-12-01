var Twit = require("twit");
var TwitterBot = require("node-twitterbot").TwitterBot;
var Bot = new TwitterBot({
    consumer_key: process.env.BOT_CONSUMER_KEY,
    consumer_secret: process.env.BOT_CONSUMER_SECRET,
    access_token: process.env.BOT_ACCESS_TOKEN,
    access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

//Setting up a user stream
var stream = Bot.stream('user');

//Anytime someone replies
stream.on('tweet', tweetEvent)

// Tweet at intervals of every five minutes

//tweetIt();
//setInterval(tweetIt, 1000*60*5);

function tweetEvent(eventMsg){
    var fs = require('fs');
    var json = JSON.stringify(tweet,null,2);
    fs.writeFile("tweet.json", json);
}

