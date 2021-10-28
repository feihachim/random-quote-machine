import "../styles/QuoteDisplay.css";

function QuoteDisplay({ quote, nextQuote }) {
  return (
    <div id="quote-box">
      <blockquote id="text">
        {quote.text}
        <p>
          <cite id="author">- {quote.author}</cite>
        </p>
      </blockquote>
      <nav>
        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
          Tweet quote
        </a>
        <button id="new-quote" onClick={nextQuote}>
          New quote
        </button>
      </nav>
    </div>
  );
}

export default QuoteDisplay;
