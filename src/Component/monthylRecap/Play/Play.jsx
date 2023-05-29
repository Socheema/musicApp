import React, { useState, useEffect } from "react";
import SinglePlayPage from "../../SinglePage/SinglePlayPage";
import { FaPlay } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import "./play.css";
import { useGlobalContext } from "../../../context";

const Play = () => {
const {playToggler,openPlayPage} = useGlobalContext()
  return (
    <div
      className={playToggler ? "play-container" : "smaller-container"}
      onClick={openPlayPage}
    >
      {playToggler && <SinglePlayPage />}
      <div className="play-wrapper">
        <div className="play-item">
          <div className="playImage-container">
            <img
              src={`${require("../../../image/slideImg4.jpeg")}`}
              alt=""
              className="playImage"
            />
          </div>
          <div>
            <h2>soso</h2>
            <h5>Omah LAy</h5>
          </div>
        </div>
        <div>
          <FaPlay className="playIcon" />
          <FaMusic className="playIcon" />
        </div>
      </div>
    </div>
  );
};

export default Play;
