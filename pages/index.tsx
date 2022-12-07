import Link from "next/link";
import React from "react";
import MainNav from "./components/MainNav";

const APP_HOSTNAME =
  process.env.NEXT_PUBLIC_APP_HOSTNAME ?? process.env.VERCEL_URL;

export default function Home() {
  return (
    <>
      <div className="container w-3/4 pt-20 pb-32 mx-auto sm:pt-28 sm:pb-40">
        <div className="flex w-full mb-5 space-x-8">
          <MainNav />

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
