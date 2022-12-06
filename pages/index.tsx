import Footer from "./components/Footer";
import MainBody from "./components/MainBody";

const APP_HOSTNAME =
  process.env.NEXT_PUBLIC_APP_HOSTNAME ?? process.env.VERCEL_URL;

export default function Home() {
  return (
    <div className="justify-between h-screen">
      <MainBody APP_HOSTNAME={APP_HOSTNAME} />
      <Footer />
    </div>
  );
}
