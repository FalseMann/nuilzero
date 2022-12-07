import React from "react";
import Link from "next/link";

export default function MainNav() {
  return (
    <>
      <nav className="flex justify-between w-3/4">
        <div className="text-base font-bold text-red-400">
          <Link href="/">nuilzero</Link>
        </div>
        <div className="text-xs font-bold leading-6">
          <Link href="/movie-night">Movie Night</Link>
        </div>
        <div className="text-xs font-bold leading-6">
          <a href="https://discord.gg/xzrj9FfszD">Discord</a>
        </div>
        <div className="text-xs font-bold leading-6">
          <a href="https://www.twitch.tv/products/nuilzero">Subscribe</a>
        </div>
      </nav>
    </>
  );
}
