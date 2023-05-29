import React from "react";
import { useGlobalContext } from "../../context";
import { FaChevronRight } from "react-icons/fa";
import Card from "../card/Card";
import { HipHopData } from "./HipHopAndRapData";

const HipHopAndRAp = () => {
  const { numberChecker } = useGlobalContext();
  return (
    <div className="hotlist-container">
      <div className="hotlist-title">
        <h4>HipHop & Rap</h4>
        <span className="right">
          More <FaChevronRight />
        </span>
      </div>
      <div className="container-items">
        {HipHopData?.map((item, index) => {
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

export default HipHopAndRAp;
