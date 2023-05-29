import React from "react";
import { SlEarphones } from "react-icons/sl";
import "../card/playlistcard.css"

const PlayListCard = ({ category, artwork, downloads,desc }) => {
    return (
     
        <article className="single-hotlist-container">
          <img src={artwork} alt="" />
          <small className="downloads">
            <SlEarphones className="earphone" /> {downloads}
          </small>
          {desc}
        </article>
     
    );
};

export default PlayListCard;
