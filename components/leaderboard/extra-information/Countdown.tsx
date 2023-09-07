"use client";
import React, { useState, useEffect } from "react";

const Countdown: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const now = new Date();
      const daysUntilSunday = 7 - now.getDay(); // Calculate days remaining until Sunday (0=Sunday, 1=Monday, ..., 6=Saturday)

      // Set the reset time to 00:00:00 on Sunday
      const resetTime = new Date(now);
      resetTime.setDate(now.getDate() + daysUntilSunday);
      resetTime.setHours(0, 0, 0, 0);

      const timeDifference = resetTime.getTime() - now.getTime();

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    // Call calculateTimeRemaining initially and then every second
    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-dirt-200 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl py-2">
      Còn lại: {timeRemaining.days} ngày {timeRemaining.hours} giờ{" "}
      {timeRemaining.minutes} phút {timeRemaining.seconds} giây
    </div>
  );
};

export default Countdown;
