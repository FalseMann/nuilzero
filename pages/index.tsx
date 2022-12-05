import React from "react";

const APP_HOSTNAME =
  process.env.NEXT_PUBLIC_APP_HOSTNAME ?? process.env.VERCEL_URL;

export default function Home() {
  return (
    <>
      <div className="container mx-auto w-3/4 pt-20 pb-32 sm:pt-28 sm:pb-40">
        <div className=" flex mb-5">
          <div className="flex ">
            <div className="ml-auto mx-10 text-sm text-red-400">nuilzero</div>
            <div className="mx-10 text-sm">Movie Night</div>
            <div className="mx-10 text-sm">Discord</div>
            <div className="mx-10 text-sm">Subscribe</div>
          </div>

          <div className="ml-auto flex-end text-sm border-solid bg-twitchColor rounded-md">
            <button className="m-1.5">Login With Twitch</button>
          </div>
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
