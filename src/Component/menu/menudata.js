import React from "react";
import { FaPodcast } from "react-icons/fa"
import {TbMicroscope} from "react-icons/tb"
import { BsMusicNoteList } from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";
import { BsCameraVideo } from "react-icons/bs";

export const menudata = [
  {
    icon: <TbMicroscope />,
    title: "Artise",
    songinfo: {
      song: "Timeless",
      artisename: "Davido",
    },
  },
  {
    icon: <FaPodcast />,
    title: "Podcast",
    podinfo: {
      program: "Nigeriaidol",
      host: "Lola",
      topic: "Eruwa Poly",
    },
  },
  {
    icon: <BsMusicNoteList />,
    title: "Category",
  },
  {
    icon: <FiBarChart2 />,
    title: "Rank",
  },
  {
    icon: <BsCameraVideo />,
    title: "Video",
  },
];
