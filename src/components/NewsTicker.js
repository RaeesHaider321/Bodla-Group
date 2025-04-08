import React, { useState } from "react";
import "./NewsTicker.css"; // Import CSS for styling

const NewsTicker = () => {
  const [isPaused, setIsPaused] = useState(false);

const newsItems = [
    "Bodla Builders wins 'Best Construction Firm 2023' award!",
    "New project announced: Bodla Builders to construct eco-friendly smart city in collaboration with the government.",
    "Bodla Builders completes 100th sustainable housing project!",
    "Breaking: Bodla Builders partners with leading tech company to integrate AI in construction processes.",
    "Safety first: Bodla Builders introduces advanced safety protocols, reducing onsite accidents by 40%.",
    "Bodla Builders launches apprenticeship program to train the next generation of construction professionals.",
    "Green initiative: Bodla Builders pledges to use 100% recycled materials in all future projects.",
    "Bodla Builders breaks ground on a state-of-the-art hospital project in downtown.",
    "Community impact: Bodla Builders donates $1 million to build schools in underserved areas.",
    "Innovation in construction: Bodla Builders unveils new 3D-printed housing technology.",
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
