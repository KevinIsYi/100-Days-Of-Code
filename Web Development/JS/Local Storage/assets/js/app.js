const listTweets = document.querySelector("#lista-tweets");

function addTweet(event) {
    event.preventDefault();

    const tweet = document.getElementById("tweet").value;

    const delBotton = document.createElement("a");
    delBotton.classList = "borrar-tweet";
    delBotton.textContent = 'X';

    const li = document.createElement("li");

    li.innerText = tweet;
    li.appendChild(delBotton);

    listTweets.appendChild(li);

    addTweetToLocalStorage(tweet);

}

function addTweetToLocalStorage(tweet) {
    let tweets;

    tweets = getTweetsFromLocalStorage();
    tweets.push(tweet);

    localStorage.setItem("tweets", JSON.stringify(tweets));

}

function getTweetsFromLocalStorage() {
    let tweets;

    if (localStorage.getItem("tweets") === null) {
        tweets = [];
    }
    else {
        tweets = JSON.parse(localStorage.getItem("tweets"));
    }
    return tweets;
}

function delTweet(event) {
    event.preventDefault();

    if (event.target.className === 'borrar-tweet') {
        let toDelete = event.target.parentElement;
        deleteTweetFromLocal(toDelete.innerText);
        toDelete.remove();
    }
}

function deleteTweetFromLocal(tweet) {

    let tweets, toDelete;
    toDelete = tweet.substring(0, tweet.length - 2);

    tweets = getTweetsFromLocalStorage();

    console.log(tweets);
    console.log(toDelete);

    tweets.forEach(function(tweet, index) {
        if (toDelete === tweet) {
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem("tweets", JSON.stringify(tweets));
}

function localStorageList() {
    let tweets;
    tweets = getTweetsFromLocalStorage();

    tweets.forEach(function(tweet) {
        const delBotton = document.createElement("a");
        delBotton.classList = "borrar-tweet";
        delBotton.textContent = 'X';
    
        const li = document.createElement("li");
    
        li.innerText = tweet;
        li.appendChild(delBotton);
    
        listTweets.appendChild(li);
    });
} 

function eventListeners() {
    // When form is sent
    document.querySelector("#formulario").addEventListener("submit", addTweet);

    // del tweets
    listTweets.addEventListener("click", delTweet);

    document.addEventListener("DOMContentLoaded", localStorageList);
}

eventListeners();