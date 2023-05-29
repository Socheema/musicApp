import {
  BsMusicNoteBeamed,
  BsFillMusicPlayerFill,
  BsFileEarmarkMusic,
  BsMusicNoteList,
  BsMusicPlayer,
  BsChevronRight,
} from "react-icons/bs";
import { Link } from 'react-router-dom'




export const favourite = [
  {
    icon1: <BsMusicNoteBeamed />,
    desc: "Favourite Songs",
    icon2: (
      <Link to='/favorite-music'>
        <BsChevronRight />,
      </Link>
    ),
  },
  {
    icon1: <BsFillMusicPlayerFill />,
    desc: "Favourite Playlists",
    icon2: (
      <Link to='/favorite-playlist'>
        <BsChevronRight />
      </Link>
    ),
  },
  {
    icon1: <BsMusicNoteBeamed />,
    desc: "My Playlists",
    icon2: (
      <Link to='/myplaylist'>
        <BsChevronRight />
      </Link>
    ),
  },
  {
    icon1: <BsFileEarmarkMusic />,
    desc: "Favourite Albums",
    icon2: (
      <Link to='/favorite-album'>
        <BsChevronRight />
      </Link>
    ),
  },
  {
    icon1: <BsMusicNoteList />,
    desc: "Favourite Videos",
    icon2: (
      <Link to='/favorite-videos'>
        <BsChevronRight />
      </Link>
    ),
  },
  {
    icon1: <BsMusicPlayer />,
    desc: "Followed Artists",
    icon2: (
      <Link>
        <BsChevronRight />
      </Link>
    ),
  },
];