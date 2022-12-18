interface ChatProps {
  appHostname: string;
}

export function Chat({ appHostname }: ChatProps) {
  return (
    <iframe
      className="relative float-right w-1/4 h-full"
      src={`https://www.twitch.tv/embed/nuilzero/chat?parent=${appHostname}&darkpopout=1`}
    ></iframe>
  );
}
