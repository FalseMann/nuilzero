import { VideoPlayer } from "../components/VideoPlayer";
import { Chat } from "../components/Chat";
import { APP_HOSTNAME } from "../lib/config";
import { MainLayout } from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <VideoPlayer appHostname={APP_HOSTNAME} />
      <Chat appHostname={APP_HOSTNAME} />
    </MainLayout>
  );
}
