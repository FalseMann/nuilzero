import { VideoPlayer } from "../components/VideoPlayer";
import { Chat } from "../components/Chat";
import { MainLayout } from "../components/layouts/MainLayout";
import { APP_HOSTNAME } from "../lib/config/client";

export default function Home() {
  return (
    <MainLayout>
      <VideoPlayer appHostname={APP_HOSTNAME} />
      <Chat appHostname={APP_HOSTNAME} />
    </MainLayout>
  );
}
