import React from 'react';
import './FavoriteSong.css'
import '../library/LibrarySection.css'
import { Link } from 'react-router-dom';

const FavoriteSong = ({icon1, description, icon2}) => {
  return (
    <div className="favoriteSong-container">
      <div className="social-icons">
        <div className="social">
          <small className="icon1">{icon1}</small>
          <h4 className="music">{description}</h4>
        </div>
        <Link>
          <small className="icon1">{icon2}</small>
        </Link>
      </div>
    </div>
  );
}

export default FavoriteSong