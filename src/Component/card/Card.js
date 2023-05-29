import React from "react";
import { MdDownloadForOffline } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";
import { SlEarphones } from "react-icons/sl";
import '../hotlist/hotlist.css'

const Card = ({category, artwork,downloads}) => {
  
  return (
      <article className="single-hotlist-container">
        <img src={artwork} alt="" />
        <MdDownloadForOffline className="download" />
        <FaPlayCircle className="play" />
        <small className="category">{category}</small>
        <small className="downloads">
          <SlEarphones className="earphone" /> {downloads}
        </small>
      </article>
  );
};

export default Card;
