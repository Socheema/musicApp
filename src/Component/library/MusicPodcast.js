import { MdFiberNew, MdOutlineDownloadForOffline } from "react-icons/md";
import { HiMusicNote } from "react-icons/hi";
import { BsFillBookmarkStarFill, BsChevronRight } from "react-icons/bs";

export const podcast = [
  {
    icon1: <MdFiberNew />,
    desc: "Updates",
    icon2: <BsChevronRight />,
  },
  {
    icon1: <MdOutlineDownloadForOffline />,
    desc: "Downloads",
    icon2: <BsChevronRight />,
  },
  {
    icon1: <HiMusicNote />,
    desc: "Podcasts Followed",
    icon2: <BsChevronRight />,
  },
  {
    icon1: <BsFillBookmarkStarFill />,
    desc: "Favourite Episodes",
    icon2: <BsChevronRight />,
  },
];