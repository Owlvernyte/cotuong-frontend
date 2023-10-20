import React from "react";
import Countdown from "./Countdown";
import Button from "@/components/ui/Button";

const ExtraInformation: React.FC = () => {
  return (
    <div className="flex flex-col justify-between items-start md:flex-row">
      <Countdown />
      <Button
        text="CHIA SẺ THÀNH TÍCH"
        startIcon
        startIconSrc="/assets/icons/primary/Share_fill.svg"
        startIconAlt="Share Icon"
      />
    </div>
  );
};

export default ExtraInformation;
