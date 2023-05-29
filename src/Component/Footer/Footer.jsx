import React from "react";
import { CiSearch } from "react-icons/ci";
import { TbLiveView } from "react-icons/tb";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { MdLibraryMusic } from "react-icons/md";
import { SiBuzzfeed } from "react-icons/si";
import Play from "../monthylRecap/Play/Play";
import { Link } from "react-router-dom";
import Library from "../../Pages/Library";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <Play />
      <div className="container-items">
        <div className="social-icons">
          <div>
            <CiSearch className="icons" />
            <p>search</p>
          </div>
          <div>
            <TbLiveView className="icons" />
            live
          </div>
          <div>
            <RiCompassDiscoverLine className="icons" />
            explore
          </div>
          <div>
            <Link to="/library">
              <MdLibraryMusic className="icons" />
              library
            </Link>
          </div>

          <div>
            <SiBuzzfeed className="icons" />
            feeds
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
