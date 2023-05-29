import React from "react";
import { monthlyRecapData } from "./MonthlyRecapData";
import { FaChevronRight } from "react-icons/fa";
import { useGlobalContext } from "../../context";
import Card from "../card/Card";

const MonthlyRecap = () => {
  const { numberChecker } = useGlobalContext();
  return (
    <div className="hotlist-container">
      <div className="hotlist-title">
        <h4>MonthlyRecap -April 2023</h4>
        <span className="right">
          More <FaChevronRight />
        </span>
      </div>
      <div className="container-items">
        {monthlyRecapData?.map((item, index) => {
          return (
            <Card
              key={index}
              category={item.category}
              artwork={item.artwork}
              downloads={numberChecker(item.downloads)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MonthlyRecap;
