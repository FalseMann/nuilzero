import Image from "next/image";
import { User } from "@prisma/client";
import { useRouter } from "next/router";

interface SubmenuProps {
  user: User;
}

export function Submenu({ user }: SubmenuProps) {
  const { reload } = useRouter();

  return (
    <div className="absolute right-0 z-20 p-4 text-xs text-white border rounded-md w-52 border-midnight-300 bg-midnight-200">
      <ul>
        <li>
          <div className="flex items-center self-center font-bold">
            <Image
              src={user.avatar}
              alt="avatar"
              className="mr-2 rounded-full w-9 h-9"
              height={36}
              width={36}
            />
            <span>{user.username}</span>
          </div>
        </li>
        <Divider />
        <li>
          <button
            onClick={() => {
              fetch("/api/auth/logout", { method: "POST" }).then((res) => {
                if (res.ok) {
                  reload();
                }
              });
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

function Divider() {
  return <li className="my-4 border-b-2 border-midnight-100" />;
}
