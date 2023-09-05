import Header from "@/components/Header";
import React from "react";

function BasicLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="app">
      <div className="app-page">
        <Header />
        <main className="h-full w-full ">{children}</main>
      </div>
    </div>
  );
}

export default BasicLayout;
