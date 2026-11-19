import { useState } from "react";
import "./App.css";

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    text: "Success is not final, failure is not fatal.",
    author: "Winston Churchill",
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan",
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Great things are done by a series of small things brought together.",
    author: "Vincent van Gogh",
  },
  {
    text: "Your limitation—it's only your imagination.",
    author: "Unknown",
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
  },
];

function App() {
  const [quoteIndex, setQuoteIndex] = useState(
    Math.floor(Math.random() * quotes.length)
  );

  const [loading, setLoading] = useState(false);

  const generateQuote = () => {
    setLoading(true);

    let newIndex;

    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === quoteIndex);

    setTimeout(() => {
      setQuoteIndex(newIndex);
      setLoading(false);
    }, 200);
  };

  return (
    <div className="app">
      <div className="quote-container">

        <div className="icon">❝</div>

        <h1>Random Quote Generator</h1>

        <p className="subtitle">
          A little inspiration for your day.
        </p>

        <div className="quote-card">
          <p className={`quote-text ${loading ? "fade" : ""}`}>
            "{quotes[quoteIndex].text}"
          </p>

          <p className="quote-author">
            — {quotes[quoteIndex].author}
          </p>
        </div>

        <button
          className="new-quote-btn"
          onClick={generateQuote}
          disabled={loading}
        >
          {loading ? "Generating..." : "↻  New Quote"}
        </button>

        <p className="footer">
          Find inspiration in every moment ✨
        </p>

      </div>
    </div>
  );
}

export default App;