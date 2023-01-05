import { VideoPlayer } from "../components/VideoPlayer";
import { Chat } from "../components/Chat";
import { MainLayout } from "../components/layouts/MainLayout";
import config from "../lib/browser/config";

export default function Home() {
  return (
    <MainLayout>
      <VideoPlayer appHostname={config.env.hostname} />
      <Chat appHostname={config.env.hostname} />
    </MainLayout>
  );
}
