import React from "react";
import Hotlist from "../Component/hotlist/Hotlist";
import MonthlyRecap from "../Component/monthylRecap/MonthlyRecap";
import Charts from "../Component/charts/charts";
import HipHopAndRAp from "../Component/HipHopAndRap/HipHopAndRAp";

const Discovery = () => {
  return (
    <div className="discovery">
      <Hotlist />
      <MonthlyRecap />
      <Charts />
      <HipHopAndRAp/>
    </div>
  );
};

export default Discovery;
