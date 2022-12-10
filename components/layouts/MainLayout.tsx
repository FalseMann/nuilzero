import React from "react";
import { GlobalFooter } from "../GlobalFooter";
import { GlobalHeader } from "../GlobalHeader";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="justify-between h-screen">
      <div className="w-full h-full bg-midnight-100">
        <div className="container w-3/4 h-full pt-20 pb-32 mx-auto bg-midnight-100 md:pt-20 md:pb-32 sm:pb-10">
          <GlobalHeader />
          <div className="h-3/4">{children}</div>
        </div>
      </div>
      <GlobalFooter />
    </div>
  );
}
