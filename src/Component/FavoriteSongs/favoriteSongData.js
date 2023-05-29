import React from "react";


import { MdDownloadForOffline } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

export const Favsongdata = [
  {
    img: `${require("../../image/slideImg7.jpeg")}`,
    artist: "Sho Ma Gba",
    title: "Wande Coal - Legend",
    download: <MdDownloadForOffline />,
    downloadmoreIcon: <BsThreeDotsVertical />,
  },
  {
    img: `${require("../../image/slideImg5.jpeg")}`,
    artist: "California Breeze",
    title: "Lil Baby - It's Only Me",
    download: <MdDownloadForOffline />,
    downloadmoreIcon: <BsThreeDotsVertical />,
  },
  {
    img: `${require("../../image/slideImg3.jpeg")}`,
    artist: "Dada (feat.Davido)",
    title: "Young Jonn - Dada",
    download: <MdDownloadForOffline />,
    downloadmoreIcon: <BsThreeDotsVertical/>
  },
];
