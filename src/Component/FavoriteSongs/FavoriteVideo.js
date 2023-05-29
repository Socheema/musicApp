import React from "react";
import { MdOutlineLibraryMusic } from "react-icons/md";
import "./favoriteplaylist.css";

const FavoriteVideo = () => {
  return (
    <div>
      <div className="favSongs-main">
        <MdOutlineLibraryMusic className="favSongs-icon" />
        <p>
          You haven't added any videos to Favorites. Explore your favorites
          here.
        </p>
        <button className="btn">Discover</button>
      </div>
    </div>
  );
};

export default FavoriteVideo;
