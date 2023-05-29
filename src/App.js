import React from "react";
import Navbar from "./Component/navbar/Navbar";
import Home from "./Pages/Home";
import Discovery from "./Pages/Discovery";
import Footer from "./Component/Footer/Footer";
import Room from "./Pages/Room";
import Error from "./Pages/Error";
import Library from "./Pages/Library";
import FavoriteMusic from "./Pages/FavoriteMusic";
import FavoritePlaylist from "./Pages/FavoritePlaylist";
import FavoriteVideos from "./Pages/FavoriteVideos";
import MyPlaylist from "./Pages/MyPlaylist";
import Play from "./Component/monthylRecap/Play/Play";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import FavoriteAlbum from "./Pages/FavoriteAlbum";

function App() {
  return (
    <div className="app-container">
      <Router>
        <NavbarWithConditionaRendering />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discovery" element={<Discovery />} />
          <Route path="/room" element={<Room />} />
          <Route path="/library" element={<Library />} />
          <Route path="/favorite-music" element={<FavoriteMusic />} />
          <Route path="/favorite-playlist" element={<FavoritePlaylist />} />
          <Route path="/favorite-album" element={<FavoriteAlbum />} />
          <Route path="/favorite-videos" element={<FavoriteVideos />} />
          <Route path="/myplaylist" element={<MyPlaylist />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <FooterWithConditionaRendering />
      </Router>
    </div>
  );
}

const NavbarWithConditionaRendering = () => {
  const location = useLocation();
  const isItPresentInTheConditionalRendering =
    location.pathname.includes("/myplaylist") ||
    location.pathname.includes("/favorite-album") ||
    location.pathname.includes("/favorite-playlist") ||
    location.pathname.includes("/favorite-music") ||
    location.pathname.includes("/favorite-videos");
  return !isItPresentInTheConditionalRendering ? <Navbar /> : null;
};

const FooterWithConditionaRendering = () => {
  const location = useLocation();
  const isItPresentInTheConditionalRendering =
    location.pathname.includes("/myplaylist") ||
    location.pathname.includes("/favorite-album") ||
    location.pathname.includes("/favorite-playlist") ||
    location.pathname.includes("/favorite-music");
  return !isItPresentInTheConditionalRendering ? <Footer /> : <Play/>;
};

export default App;
