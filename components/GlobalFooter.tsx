import React from "react";

export function GlobalFooter() {
  return (
    <div className="absolute inset-x-0 bottom-0 w-full border-black-[1px] bg-midnight-200">
      <div className="container mx-auto m-10 w-3/4 text-footerText">
        <span className="font-semibold">nuilzero.tv &copy;</span>
        <br />
        <a href="/twitch" className="text-sm">
          twitch.tv/nuilzero
        </a>
      </div>
    </div>
  );
}
