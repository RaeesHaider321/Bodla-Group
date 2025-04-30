import React, { useState } from "react";
import "./NewsTicker.css"; // Import CSS for styling

const NewsTicker = () => {
  const [isPaused, setIsPaused] = useState(false);

  const newsItems = [
    "Get your own Commercial Shop: Rs. 88,000/- per Month Installment.",
    "Get a Property from your Salary Cheque.",
    "Plots in Rumanza with just 5% Down-payment.",
    "Get your home in just Rs. 8,600 per sq. ft!",
    "Rs. 88,000/- per month installment – Own a Commercial Shop Today!",
    "Experience world-class golfing at Rumanza Golf & Country Club.",
    "Sector-V Main Park Launched! Bodla Homes now located right in front of the park.",
    "Exclusive Discounts for Early Investors in Bodla Heights!",
    "Flexible Payment Plans Available for Bodla Business Square.",
    "Limited-Time Offer: Free Registration on Select Plots in Bodla Enclave.",
    "Invest in Bodla's Premium Housing Scheme – Starting at Rs. 1.5 Crore Only!",
    "Special Corporate Packages for Bulk Property Purchases.",
    "Bodla Group Introduces Easy Installment Plans for Overseas Pakistanis.",
    "Book Your Plot Today & Pay in 12 Months – Zero Interest!",
    "Bodla Luxury Villas – Now Open for Booking with 10% Down Payment.",
    "New Commercial Project Launching Soon – Reserve Your Space Early!",
    "Bodla Group Wins 'Best Real Estate Developer 2024' Award!",
    "Invest in Future: High-Return Plots Near New Islamabad Airport.",
    "Bodla's Ramadan Special: 0% Processing Fee on All Bookings!",
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
