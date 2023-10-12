"use client";

import Header from "@/components/layouts/Header";
import OnCard from "@/components/tournament/active-tournament/OnCard";
import OffCard from "@/components/tournament/pre-tournament/OffCard";
import React from "react";

export default function Home() {
  return (
    
    <div className="flex justify-center min-h-screen">
    <div className="container max-w-screen-2xl p-10">
    <OnCard />
    <OffCard />
      </div>
    </div>
    
  );
}
