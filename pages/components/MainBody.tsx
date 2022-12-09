import React from "react";
import { GlobalNav } from "../../components/GlobalNav";

interface Props {
  APP_HOSTNAME: string | undefined;
}
export default function MainBody({ APP_HOSTNAME }: Props) {
  return (
    <div className="w-full h-full bg-midnight-100">
      <div className="container w-3/4 h-full pt-20 pb-32 mx-auto bg-midnight-100 md:pt-20 md:pb-32 sm:pb-10">
        <GlobalNav />
        <div id="twitch-player" className="h-3/4">
          <iframe
            className="relative float-left w-3/4 h-full "
            src={`https://player.twitch.tv/?channel=nuilzero&parent=${APP_HOSTNAME}`}
            frameBorder="0"
            allowFullScreen={true}
            scrolling="no"
          ></iframe>
          <iframe
            className="relative float-right w-1/4 h-full"
            src={`https://www.twitch.tv/embed/nuilzero/chat?parent=${APP_HOSTNAME}`}
          ></iframe>
        </div>
        <div></div>
      </div>
    </div>
  );
}
