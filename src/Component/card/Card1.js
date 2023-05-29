import React from "react";
import "./card.css";


const Card1 = ({

  image,
  moreInfoArtist,
  moreInfoSong,
  songIcon1,
  songIcon2,
}) => {
  return (
   
      <div className="content ">
        <img src={image} alt="" />
        <div className="card-info">
          <p className="artist">{moreInfoArtist}</p>
          <p className="SongTitle">{moreInfoSong}</p>
        </div>
        <div className="card-more">
          <small className="icon">{songIcon1}</small>
          <small className="icon2">{songIcon2}</small>
        </div>
      </div>
    
  );
};

export default Card1;
