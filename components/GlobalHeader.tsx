import { Link } from "./GlobalHeader/Link";

export function GlobalHeader() {
  return (
    <div className="flex mb-5">
      <div className="flex space-x-8">
        <div className="ml-auto text-lg font-bold text-red-400 ">nuilzero</div>
        <Link href="/discord">Discord</Link>
        <Link href="/twitch">Twitch</Link>
        <Link href="/subscribe">Subscribe</Link>
      </div>
    </div>
  );
}
