const text = document.getElementById("quote");
const author = document.getElementById("author");

const getNewQuote = async () => {

    let url = "https://type.fit/api/quotes";

    const response = await fetch(url);
    console.log(typeof response);
    const allQuotes = await response.json();

    const index = Math.floor(Math.random()*allQuotes.length);

    const quote = allQuotes[index].text;

    const auth = allQuotes[index].author;

    if (auth == null) {
        author = "Anonymous";
    }

    text.innerHTML = quote;
    author.innerHTML = " " + auth;
}

getNewQuote();