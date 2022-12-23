import { MainLayout } from "../components/layouts/MainLayout";
import Script from "next/script";

export default function Home() {
  return (
    <MainLayout>
      <div id="twitch-embed" className="h-full z-10"></div>
      <Script
        src="https://embed.twitch.tv/embed/v1.js"
        onLoad={() => {
          /* eslint-disable */
          // @ts-ignore
          new Twitch.Embed("twitch-embed", {
            channel: "nuilzero",
            height: "100%",
            width: "100%",
          });
        }}
      />
    </MainLayout>
  );
}
