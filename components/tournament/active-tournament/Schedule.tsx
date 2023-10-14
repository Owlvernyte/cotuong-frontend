"use client";
import { useEffect, useState } from "react";

const Schedule: React.FC = () => {
  // Extract date/month/year from current date
  const startDate = new Date();

  const date = startDate.getDate();
  const month = startDate.getMonth() + 1;
  const year = startDate.getFullYear();

  return (
    <div className="text-dirt-200 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl py-2">
      {date}/{month}/{year}
    </div>
  );
};

export default Schedule;
