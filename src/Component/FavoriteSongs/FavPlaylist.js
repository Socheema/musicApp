import React from "react";
import "../FavoriteSongs/FavoriteSongs.css";
import { MdOutlineLibraryMusic } from "react-icons/md";
import Card1 from "../card/Card1";
import { Favsongdata } from "./favoriteSongData";
import { IoIosSync } from "react-icons/io";

const FavPlaylist = () => {
  return (
    <div>
      <div className="favSongs-main">
        <MdOutlineLibraryMusic className="favSongs-icon" />
        <p>
          You haven't created any playlists. Create yyour own playlists here.
        </p>
        <button>Create Now</button>
      </div>
      <div className="card-container">
        <div className="card-header">
          <h4>You May Also Like</h4>
          <div>
            <p>more</p>
            <IoIosSync />
          </div>
        </div>
        <div className="card-content">
          {Favsongdata?.map((item, index) => {
            return (
              <Card1
                key={index}
                image={item.img}
                moreInfoArtist={item.artist}
                moreInfoSong={item.title}
                songIcon1={item.download}
                songIcon2={item.downloadmoreIcon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FavPlaylist;
