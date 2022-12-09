import { Link } from "./GlobalNav/Link";

export function GlobalNav() {
  return (
    <div className="flex mb-5">
      <div className="flex space-x-8">
        <div className="ml-auto text-sm text-lg font-bold text-red-400 ">
          nuilzero
        </div>
        <Link href="/discord">Discord</Link>
        <Link href="/twitch">Subscribe</Link>
      </div>
    </div>
  );
}
