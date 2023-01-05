import type { User } from "@prisma/client";
import useSWR from "swr";
import { fetcher } from "../lib/browser/fetcher";
import { Avatar } from "./GlobalHeader/Avatar";
import { Link } from "./GlobalHeader/Link";

export function GlobalHeader() {
  const { data: user, error } = useSWR<User>("/api/auth/user", fetcher);

  return (
    <div className="flex justify-between h-8 mb-5">
      <div className="flex items-center space-x-8 text-sm">
        <div className="text-lg font-bold text-red-400">nuilzero</div>
        <Link href="/discord">Discord</Link>
        <Link href="/twitch">Twitch</Link>
        <Link href="/subscribe">Subscribe</Link>
      </div>
      <div>
        {user && !error && <Avatar user={user} />}
        {(!user || error) && (
          <Link href="/api/auth/login" className="text-sm">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
