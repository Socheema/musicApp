import React from "react";
import { hotlistData } from "./hotlistData";
import { FaChevronRight } from "react-icons/fa";
import "./hotlist.css";
import { useGlobalContext } from "../../context";
import Card from "../card/Card";

const Hotlist = () => {
  const { numberChecker } = useGlobalContext();
  return (
    <div className="hotlist-container">
      <div className="hotlist-title">
        <h4>Hotlist</h4>
        <span className="right">
          More <FaChevronRight />
        </span>
      </div>
      <div className="container-items">
        {hotlistData?.map((item, index) => {
          return (
            <Card
              key={index}
              category={item.category}
              artwork={item.artwork}
              url={item.url}
              downloads={numberChecker(item.downloads)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Hotlist;
