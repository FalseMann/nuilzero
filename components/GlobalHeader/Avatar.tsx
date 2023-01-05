import type { User } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import { Submenu } from "./Submenu";

interface AvatarProps {
  user: User;
}

export function Avatar({ user }: AvatarProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative text-sm">
      <div className="flex items-center p-1 space-x-2 cursor-default">
        <button onClick={() => setShowMenu(!showMenu)}>
          <Image
            src={user.avatar}
            alt="avatar"
            className="w-8 h-8 rounded-full"
            height={32}
            width={32}
          />
        </button>
      </div>
      {showMenu && <Submenu user={user} />}
    </div>
  );
}
