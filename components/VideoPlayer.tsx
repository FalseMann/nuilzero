interface VideoPlayerProps {
  appHostname: string;
}

export function VideoPlayer({ appHostname }: VideoPlayerProps) {
  return (
    <iframe
      className="relative float-left w-3/4 h-full z-10"
      src={`https://player.twitch.tv/?channel=nuilzero&parent=${appHostname}`}
      frameBorder="0"
      allowFullScreen={true}
      scrolling="no"
    ></iframe>
  );
}
