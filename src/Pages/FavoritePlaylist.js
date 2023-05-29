import React from 'react'
import FavoritePlaylists from '../Component/FavoriteSongs/FavoritePlaylists';
import { BsChevronLeft } from "react-icons/bs";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import "../Component/FavoriteSongs/FavoriteSongs.css";
import { Link } from "react-router-dom";


const FavoritePlaylist = () => {
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
      <div className="favMusic-swipper">
        <small>Favorite Songs</small>
        <small>Favorite Playlists</small>
        <small>My Playlists</small>
        <small>Favorite Albums</small>
        <small>Favorite Videos</small>
      </div>
      <FavoritePlaylists />
    </div>
  );
}

export default FavoritePlaylist