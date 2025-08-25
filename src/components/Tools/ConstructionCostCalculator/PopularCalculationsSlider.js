// PopularCalculationsSlider.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Card } from 'react-bootstrap';
import './PopularCalculationsSlider.css';
import Icons from "../../../components/Icon";

const PopularCalculationsSlider = ({ calculations, onCalculationClick, activePreset }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4.5);
  const sliderRef = useRef(null);
  const intervalRef = useRef(null);

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setItemsToShow(4.5); // 4 and a half items on large desktop
      } else if (window.innerWidth >= 992) {
        setItemsToShow(3.5); // 3 and a half items on desktop
      } else if (window.innerWidth >= 768) {
        setItemsToShow(2.5); // 2 and a half items on tablet
      } else {
        setItemsToShow(1.5); // 1 and a half items on mobile
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Auto slide effect
  useEffect(() => {
    const startSlider = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => 
          prevIndex >= calculations.length - Math.floor(itemsToShow) 
            ? 0 
            : prevIndex + 1
        );
      }, 10000);
    };

    startSlider();

    // Pause on hover
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('mouseenter', () => {
        clearInterval(intervalRef.current);
      });
      
      slider.addEventListener('mouseleave', () => {
        startSlider();
      });
    }

    return () => {
      clearInterval(intervalRef.current);
      if (slider) {
        slider.removeEventListener('mouseenter', () => {});
        slider.removeEventListener('mouseleave', () => {});
      }
    };
  }, [calculations.length, itemsToShow]);

  // Calculate visible items and offset
  const itemWidth = 100 / itemsToShow;
  const offset = -currentIndex * itemWidth;

  // Manual navigation
  const goToPrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? calculations.length - Math.floor(itemsToShow) : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex >= calculations.length - Math.floor(itemsToShow) ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="popular-calculations-slider">
      <h2 className="mb-4">Popular Calculations</h2>
      
      <div className="slider-container position-relative">
        <button 
          className="slider-nav slider-nav-prev"
          onClick={goToPrev}
        >
          <Icons name="leftArrow" />
        </button> 
        
        <div 
          ref={sliderRef}
          className="slider-wrapper"
        >
          <div 
            className="slider-track"
            style={{ 
              transform: `translateX(${offset}%)`,
              transition: 'transform 0.5s ease'
            }}
          >
            {calculations.map((calc, index) => (
              <div 
                key={index}
                className="slider-item"
                style={{ width: `${itemWidth}%` }}
              >
                <Card
                  onClick={() => onCalculationClick(calc)}
                  className={`cursor-pointer m-2 h-100 ${activePreset === calc.label
                    ? 'bg-primary text-white'
                    : ''}`}
                >
                  <Card.Body>
                    <h6>{calc.label} Constructing Cost</h6>
                    <p>{calc.storey} Storey</p>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <button 
          className="slider-nav slider-nav-next"
          onClick={goToNext}
        >
          <Icons name="rightArrow" />
        </button>
      </div>
    </div>
  );
};

export default PopularCalculationsSlider;