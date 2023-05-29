import React, { useState } from "react";

import FavoriteSong from "../FavoriteSong/FavoriteSong";
import { BsChevronRight } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import { favourite } from "./MusicPlaylist";
import { podcast } from "./MusicPodcast";
import "./LibrarySection.css";

const LibrarySection = () => {
  const [favorite, setFavorite] = useState(1);

  const favoriteHandler = (index) => {
    setFavorite(index);
  };

  const podcastHandler = () => {};
  return (
    <div className="discovery">
      <div className="library-container">
        <div className="library-downloads">
          <div>
            <p className="music">Downloads & Local Music</p>
            <BsChevronRight className="icon1" />
          </div>
          <div className="music-container">
            <img
              src={`${require("../../image/slideImg3.jpeg")}`}
              alt=""
              className="music-image"
            />
            <FaPlayCircle className="musicPlay" />
            <div className="span">
              <span>01</span>
              <p>Who is your guy?</p>
            </div>
          </div>
        </div>
        <div className="library-main">
          <div className="library-btn">
            <div
              className={
                favorite === 1 ? "active favorite-btn" : "favorite-btn "
              }
              onClick={() => favoriteHandler(1)}
            >
              <p>Favourite Music</p>
            </div>
            <div
              className={favorite === 2 ? "active podcast-btn" : "podcast-btn "}
              onClick={() => favoriteHandler(2)}
            >
              <p>My Podcasts</p>
            </div>
          </div>
          {favorite === 1 &&
            favourite?.map((item, index) => {
              return (
                <FavoriteSong
                  className="social-icons2"
                  key={index}
                  icon1={item.icon1}
                  description={item.desc}
                  icon2={item.icon2}
                />
              );
            })}
          {favorite === 2 &&
            podcast?.map((item, index) => {
              return (
                <FavoriteSong
                  className="social-icons1"
                  key={index}
                  icon1={item.icon1}
                  description={item.desc}
                  icon2={item.icon2}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default LibrarySection;
