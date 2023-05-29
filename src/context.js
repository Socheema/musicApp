import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [activePage, setActivePage] = useState(0)
  const location = useLocation()

  const [playToggler, setPlayTogger] = useState(false);

  useEffect(() => {
    const container = document.getElementById("favMusic-swipper");
    const activeItem = document.getElementById(`item-${activePage}`)
    container.scrollTo({left:activeItem.offsetLeft, behavior:'smooth'})
  }, [activePage])

  useEffect(() => {
    switch (location.pathname) {
      case "/favorite-music":
        setActivePage(0);
        break;
      case "/favorite-playlist":
        setActivePage(1);
        break;
      case "/myplaylist":
        setActivePage(2);
        break;
      case "/favorite-album":
        setActivePage(3);
        break;
      case "/favorite-videos":
        setActivePage(4);
        break;
      default:
        setActivePage(0)
        break;
    }
  },[location])
  const numberChecker = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "m";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    } else {
      return num.toString();
    }
  };

  const indexUpdater = (num) => {
    return num + 1;
  };

  const openPlayPage = () => {
    setPlayTogger(!playToggler);
    console.log(playToggler);
  };

  const closePlayPage = () => {
    setPlayTogger(false);
  };
  return (
    <AppContext.Provider
      value={{
        numberChecker,
        indexUpdater,
        playToggler,
        openPlayPage,
        closePlayPage,
        location,
        activePage
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
