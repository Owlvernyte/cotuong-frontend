import React from "react";

interface StatCard {
  label: string;
  value?: number;
}

const StatCard: React.FC<StatCard> = ({ label, value = 0 }) => {
  return (
    <div className="flex flex-row md:flex-col items-center">
      <div className="text-xl opacity-70">{label}</div>
      <div className="text-3xl px-2 md:text-7xl md:py-4">{value}</div>
    </div>
  );
};

export default StatCard;
