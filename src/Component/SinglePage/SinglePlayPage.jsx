import React, { useState } from "react";
import {
  BsChevronDown,
  BsFillPlayCircleFill,
  BsPlusSquare,
  BsSoundwave,
  BsShuffle,
  BsSkipStartFill,
  BsSkipEndFill,
} from "react-icons/bs";
import { CgProfile, CgArrowTopRightO } from "react-icons/cg";
import { MdQueueMusic } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { RxDotsVertical } from "react-icons/rx";
import "./SinglePlayPage.css";
import { useGlobalContext } from "../../context";

const SinglePlayPage = () => {
  const {playToggler, closePlayPage} = useGlobalContext()
 
  return (
    <div className="siggle-pp-container">
      <div className="single-pp-wrapper">
        <div className="s-pp-top-icon">
          <BsChevronDown onClick={closePlayPage} />
          <div>
            <CgProfile className="cgprofile" />
            <CgArrowTopRightO />
          </div>
        </div>
        <img src={`${require("../../image/slideImg7.jpeg")}`} alt="" />
        <div>
          <h2>soso</h2>
          <p>omah Lay</p>
          <small>Lyrics soso - omah Lay</small>
        </div>
        <div className="s-pp-top-icon s-pp-icon-wrapper">
          <BsPlusSquare />
          <BsSoundwave />
          <AiOutlineDownload />
          <FcLike />
          <RxDotsVertical />
        </div>
        <div>
          <div className="music-bar"></div>
          <div className="music-bar-counter">
            {/* play reader */}
            <small>00:00</small>
            <small>00:00</small>
          </div>
          <div className="bottom-icons s-pp-top-icon">
            <BsShuffle />
            <BsSkipStartFill />
            <BsFillPlayCircleFill />
            <BsSkipEndFill />
            <MdQueueMusic />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlayPage;
