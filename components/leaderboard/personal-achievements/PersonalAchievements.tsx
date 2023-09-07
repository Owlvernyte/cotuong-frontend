import React from "react";
import Image from "next/image";

import CardTitle from "./CardTitle";
import Ranking from "./Ranking";
import ScoreBoard from "./ScoreBoard";

const PersonalAchievement: React.FC = () => {
  return (
    <div className="bg-dirt-300 rounded-md my-4">
      <CardTitle />
      <div className="flex flex-col md:flex-row">
        {/* Note: Còn hard code số xếp hạng - để random số */}
        <Ranking top={Math.floor(Math.random() * (10 - 1 + 1)) + 1} />
        <ScoreBoard />
      </div>
    </div>
  );
};

export default PersonalAchievement;
