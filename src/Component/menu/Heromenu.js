import React, { useState,useRef} from "react";
import {menudata} from "./menudata";
import { RiScan2Fill } from "react-icons/ri";
import { BiScan } from "react-icons/bi";
import { MdOutlineLyrics } from "react-icons/md";
import "./heromenu.css";

export default function Heromenu() {
  const [menuNavigate, setMenuNavigate] = useState(true);
  const [drag, setDrag] = useState(menudata);
  const dragItem = useRef()
  const dragOverItem = useRef()

  const dragStart = (e,position) => {
    dragItem.current = position
  }
    const dragEnter = (e, position) => {
      dragOverItem.current = position;
    };
  console.log([...drag])

  const handleNavigate = function () {
    setMenuNavigate(true);
  };
  const radioNavigate = function () {
    setMenuNavigate(false);
  };
  return (
    <div className="hero-menu-conatainer">
      {/* left menu container */}
      <div className="left-menu-container">
        <div
          className={menuNavigate ? "menu-list" : "menu-list navigate-active"}
        >
          <div className="navigate-list" onClick ={handleNavigate}>
            {!menuNavigate && <>•••</>}
          </div>

          {menuNavigate && (
            <div>
              <div className="hero-search-by-beat">
                {<RiScan2Fill className="hero-list-icon" />}
                <p>Search by Beat</p>
              </div>
              <div className="hero-add-friend">
                <BiScan className="hero-list-icon" />
                <p>Add frineds</p>
              </div>
              <div className="hero-Search-by-lyrics">
                <MdOutlineLyrics className="hero-list-icon" />
                <p>Add frineds</p>
              </div>
            </div>
          )}
        </div>
        {/* Radio container */}
        <div className={menuNavigate ? "radio-container navigate-active" :  "radio-container"}>
          {!menuNavigate && (
            <div>
              <div className="radio-image">
                <img 
                  src={require("../../image/radio-image.jpeg")}
                  alt="radio-image"
                />
              </div>
              <h3 className="radio-title">Radio</h3>
              <p className="radio-decs">feel your self</p>
            </div>
          )}

          <div className="radio-navigate" onClick={radioNavigate}>{menuNavigate && <>•••</>}</div>
        </div>
      </div>
      {/* right menu container */}
      <div className="right-menu--container">
        <div className="right-menu-card">
          <div className="first-card">
            <div>
              <MdOutlineLyrics className="radio-icon-1" />
              <h3 className="radio-title-1">Artise</h3>
            </div>
          </div>
          <div>
            <MdOutlineLyrics className="radio-icon-1" />
            <h3 className="radio-title-1">Artise</h3>
          </div>
          <div>
            <MdOutlineLyrics className="radio-icon-1" />
            <h3 className="radio-title-1">Artise</h3>
          </div>
          <div>
            <MdOutlineLyrics className="radio-icon-1" />
            <h3 className="radio-title-1">Rank</h3>
          </div>
          <div>
            <MdOutlineLyrics className="radio-icon-1" />
            <h3 className="radio-title-1">Video</h3>
          </div>
          <div>
            <MdOutlineLyrics className="radio-icon-1" />
            <h3 className="radio-title-1">Category</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
