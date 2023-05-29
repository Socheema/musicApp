import React from "react";
import FavoriteSongs from "../Component/FavoriteSongs/FavoriteSongs";
import { BsChevronLeft } from "react-icons/bs";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import '../Component/FavoriteSongs/FavoriteSongs.css';
import { Link } from "react-router-dom";

const FavoriteMusic = () => {
  return (
    <div className="favMusic-wrapper">
      <div className="favMusic-header">
        <Link to={"/library"}>
          <small>
            <BsChevronLeft />
          </small>
        </Link>
        <h4>Favorite Music</h4>
        <small>
          <MdOutlineDownloadForOffline />
        </small>
      </div>
      <div className="favMusic-swipper" id="favMusic-swipper">
        <small className="item" id="item-0">
          Favorite Songs
        </small>
        <small className="item" id="item-1">
          Favorite Playlists
        </small>
        <small className="item" id="item-2">
          My My Playlists
        </small>
        <small className="item" id="item-3">
          Favorite Albums
        </small>
        <small className="item" id="item-4">
          Favorite Videos
        </small>
      </div>
      <FavoriteSongs />
    </div>
  );
};

export default FavoriteMusic;
