import "../styles/App.css";
import { useState } from "react";
import { Quotes } from "../datas/Quotes";
import QuoteDisplay from "./QuoteDisplay";

function App() {
  const displayRandomQuote = () => {
    const quotesLength = Quotes.length;
    let randomNumber = Math.floor(Math.random() * quotesLength);
    return Quotes[randomNumber];
  };

  const [quote, setQuote] = useState(displayRandomQuote());

  const randomizeQuote = () => {
    setQuote(displayRandomQuote());
  };
  return (
    <div className="app">
      <QuoteDisplay quote={quote} nextQuote={randomizeQuote} />
    </div>
  );
}

export default App;
