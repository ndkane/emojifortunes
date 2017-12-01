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

// reply whenever another account tweets to this account
var stream = T.stream('user');
stream.on('tweet', tweetEvent);

function tweetEvent(eventMsg) {

    var replyTo = eventMsg.in_reply_to_screen_name;
    var text = eventMsg.text;
    var from = eventMsg.user.screen_name;
    console.log('tweet received from another account: ', text);


    if (replyTo == 'dpf205') {
        var newTweet = '\n this is a response to a tweet from ' + '@' + from;
        replyTweet(newTweet);
    }
}

function replyTweet(tweetText) {
    var post_params = {
        status: tweetText
    };

    T.post('statuses/update', post_params, logTweet);
    function logTweet(err, data, response) {
        if (err) {
            return err;
        } else {
            console.log('\n tweet sent from replier bot: ', post_params.status);
        }
    }
}
