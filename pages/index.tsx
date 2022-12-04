import React from "react";

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

        {/* This commented code is for showing the twitch embed on local host, the uncommented should work when deployed to vercel ( not entirely sure but after the first push 
          we will know if it works for sure) */}
        {/* <div id="Twitch player">
          <iframe
            className="container text-center items-center h-[32rem]"
            src="https://player.twitch.tv/?channel=nuilzero&parent=localhost"
            frameBorder="0"
            allowFullScreen={true}
            scrolling="no"
          ></iframe>
        </div> */}
        <div id="Twitch player">
          <iframe
            className="container text-center items-center h-[32rem]"
            src="https://player.twitch.tv/?channel=nuilzero&parent=https://nuilzero.tv/"
            frameBorder="0"
            allowFullScreen={true}
            scrolling="no"
          ></iframe>
        </div>
      </div>
    </>
  );
}
