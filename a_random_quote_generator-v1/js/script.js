/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'Let us always meet each other with smile, for the smile is the beginning of love.',
   source: 'Mother Theresia'
  },

  {
   quote:'Happiness is holding someone in your arms and knowing you hold the whole world.',
    source: 'Orhan Pamuk',
    citation: 'Snow'
  },

  {
  quote: 'I have always imagined that Paradise will be a kind of library.',
  source: 'Jorge Luis Borges'
  },

  {
  quote: 'A good book is an event in my life.',
  source: 'Stendhal',
  citation: 'The Red and the Black'
  },

  {
  quote: 'My library is an archive of longings.',
  source: 'Susan Sontag',
  citation: 'As Consciousness is Harnessed to Flesh: Journals and Notebooks',
  year: '1964-1980'
  },

  {
  quote: 'My alma mater was books, a good library.... I could spend the rest of my life reading, just satisfying my curiosity.',
  source: 'Malcom X'
  },

  {
  quote: 'Always find opportunities to make someone smile, and to offer random acts of kindness in everyday life.',
  source: 'Roy T. Bennett',
  citation: 'The Light in the Heart'
  }
];

// console.log(quotes);

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
const randomNumber = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomNumber];
console.log(randomNumber);
console.log(randomQuote);
return randomQuote;
}

getRandomQuote();



/***
 * `printQuote` function
***/

function printQuote() {
const getQuoteObject = getRandomQuote();
let quoteOutput = '<p class="quotes"> randomQuote.quote</p> <p class="source"> randomQuote.source';
if (quotes.citation) {
quoteOutput += '<span class="citation"> randomQuote.citation</span>';
} if (quotes.year) {
quoteOutput += '<span class="year">randomQuote.year</span>';
}
quoteOutput += '</p>';
document.getElementById('quote-box').innerHTML = quoteOutput; 
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);