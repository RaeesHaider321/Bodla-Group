import React, { useState } from "react";
import "./NewsTicker.css"; // Import CSS for styling

const NewsTicker = () => {
  const [isPaused, setIsPaused] = useState(false);

const newsItems = [
    "Get your own Commercial Shop: Rs. 88,000/- per Month Installment.",
    "Get a Property from your Salary Cheque.",
    "Plots in Rumanza with just 5% Down-payment. ",
];

  return (
    <>
    
    <div
      className="news-ticker"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={`ticker-content ${isPaused ? "paused" : ""}`} style={{ animationDuration: "150s" }}>
        {newsItems.map((item, index) => (
          <span key={index} className="ticker-item">{item}</span>
        ))}
      </div>
    </div></>
  );
};

export default NewsTicker;
