import React, { useState } from "react";
import { useEffect } from "react";
import slide from "../../imageScroll";
import "./carousel.css";

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imgIndex,setImgIndex] = useState(0)
    useEffect(() => {
        const timerCleaner = setTimeout(() => {
            if (currentIndex === slide.length - 1 && imgIndex === slide.length - 1) {
                setCurrentIndex(0);
                setImgIndex(0)
            } else {
                setCurrentIndex(currentIndex + 1);
                setImgIndex(imgIndex + 1);
            }
          
        }, 5000);
         return ()=>clearTimeout(timerCleaner)
        
    
    }, [currentIndex,imgIndex]);

    const changeSlide = (id) => { 
      setCurrentIndex(id);
      setImgIndex(id);
    };


  return (
    <div className="carousel-container">
      {slide.map((slideItem, index) => {
        return <img src={slide[imgIndex].url} alt="slideimg" key={index} />;
      })}
      <div className="dot-style">
        {slide.map((slidesItem, slideIndex) => {
          return (
            <div
              className={
                currentIndex === slideIndex
                  ? "active-slide-progress"
                  : "slide-progress"
              }
              key={slideIndex}
              onClick={()=>{changeSlide(slideIndex)}}
            >
              <div
                className={
                  currentIndex === slideIndex
                    ? "active-loading-slide "
                    : "loading-slide"
                }
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

