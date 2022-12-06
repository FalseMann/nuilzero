import React from "react";

interface Props {
  APP_HOSTNAME: string | undefined;
}
export default function MainBody({ APP_HOSTNAME }: Props) {
  return (
    <div className="w-full h-full bg-midnight-100">
      <div className="container h-full bg-midnight-100 mx-auto w-3/4 pt-20 pb-32 md:pt-20 md:pb-32 sm:pb-10">
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

        <div id="twitch-player" className="h-3/4">
          <iframe
            className="relative w-3/4 h-full  float-left "
            src={`https://player.twitch.tv/?channel=nuilzero&parent=${APP_HOSTNAME}`}
            frameBorder="0"
            allowFullScreen={true}
            scrolling="no"
          ></iframe>
          <iframe
            className="relative w-1/4 h-full float-right"
            src={`https://www.twitch.tv/embed/nuilzero/chat?parent=${APP_HOSTNAME}`}
          ></iframe>
        </div>
        <div></div>
      </div>
    </div>
  );
}
