import React from "react";
import { MdOutlineLibraryMusic } from "react-icons/md";
import PlayListCard from "../card/PlayListCard";
import { hotlistData } from "../hotlist/hotlistData";
import { useGlobalContext } from "../../context";
import "./favoriteplaylist.css";

const FavAlbum = () => {
  const { numberChecker } = useGlobalContext();
  return (
    <div>
      <div className="favSongs-main">
        <MdOutlineLibraryMusic className="favSongs-icon" />
        <p>
          You haven't added any albums to Favorites. Explore your favorites here.
        </p>
        <button className="btn">Discover</button>
      </div>
      <div className="card-container">
        <div className="card-header">
          <h4>You May Also Like</h4>
        </div>
        <div className="playlist-content">
          {hotlistData?.map((item, index) => {
            return (
              <PlayListCard
                key={index}
                artwork={item.artwork}
                downloads={numberChecker(item.downloads)}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FavAlbum;
