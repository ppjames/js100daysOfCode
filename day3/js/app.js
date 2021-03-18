const quotes = [
  {
"text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
"author": "Thomas Edison"
  },
  {
"text": "You can observe a lot just by watching.",
"author": "Yogi Berra"
  },
  {
"text": "A house divided against itself cannot stand.",
"author": "Abraham Lincoln"
  },
  {
"text": "Difficulties increase the nearer we get to the goal.",
"author": "Johann Wolfgang von Goethe"
  },
  {
"text": "Fate is in your hands and no one elses",
"author": "Byron Pulsifer"
  },
  {
"text": "Be the chief but never the lord.",
"author": "Lao Tzu"
  },
  {
"text": "Nothing happens unless first we dream.",
"author": "Carl Sandburg"
  },
  {
"text": "Well begun is half done.",
"author": "Aristotle"
  },
  {
"text": "Life is a learning experience, only if you learn.",
"author": "Yogi Berra"
  }
]; 

/* const quotes = [
  {
"text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
"author": "Thomas Edison"
  },
  {
"text": "You can observe a lot just by watching.",
"author": "Yogi Berra"
  }
] */


document.addEventListener('DOMContentLoaded', function () {
  const quote = getQuote(quotes);
  const actionElement = document.getElementById('action');
  const quoteElement = document.getElementById('quote');
  const authorElement = document.getElementById('author');

  drawQuote(quoteElement, authorElement, quote());

  actionElement.addEventListener('click', (event) => {
    drawQuote(quoteElement, authorElement, quote());
  })
})

const getQuote = (quotes) => {
  let positionQuote;
  return () => {
    lastPositionQuote = positionQuote;
    positionQuote = (Math.floor(Math.random() * quotes.length));
    if (typeof positionQuote !== "undefined" && (positionQuote === lastPositionQuote)) {
      positionQuote = (Math.floor(Math.random() * positionQuote)); 
    }

    return quotes[positionQuote];
  }
}

const drawQuote = (quoteElement, authorElement, quote) => {
  let { text, author } = quote;
  quoteElement.innerHTML = text;
  authorElement.innerHTML = author;
}

