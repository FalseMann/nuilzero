import Link from "next/link";
import React from "react";

const APP_HOSTNAME =
  process.env.NEXT_PUBLIC_APP_HOSTNAME ?? process.env.VERCEL_URL;

export default function Home() {
  return (
    <>
      <div className="container w-3/4 pt-20 pb-32 mx-auto sm:pt-28 sm:pb-40">
        <div className="flex mb-5">
          <div className="flex space-x-8">
            <div className="ml-auto text-base font-bold text-red-400">
              <Link href="/">nuilzero</Link>
            </div>
            {/* <div className="text-sm">Movie Night</div> */}
            <div className="text-xs font-bold leading-6">
              <a href="https://discord.gg/xzrj9FfszD">Discord</a>
            </div>
            <div className="text-xs font-bold leading-6">
              <a href="https://www.twitch.tv/products/nuilzero">Subscribe</a>
            </div>
          </div>

          {/* <div className="ml-auto text-sm border-solid rounded-md flex-end bg-twitchColor">
            <button className="m-1.5">Login With Twitch</button>
          </div> */}
        </div>

        <div id="twitch-player">
          <iframe
            className="container text-center items-center h-[32rem]"
            src={`https://player.twitch.tv/?channel=nuilzero&parent=${APP_HOSTNAME}`}
            frameBorder="0"
            allowFullScreen={true}
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </>
  );
}
