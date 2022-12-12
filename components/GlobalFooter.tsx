import React from "react";
import { useRouter } from "next/router";

export function GlobalFooter() {
  const router = useRouter();
  // condition base redirecting
  function redirectToTwitch() {
    router.push("/nuilzeroTwitch");
  }
  function redirectToGithub() {
    router.push("/github");
  }
  return (
    <div className="absolute fixed inset-x-0 bottom-0 w-full border-black-[1px] bg-midnight-200">
      <div className="container mx-auto m-10 w-3/4 ">
        <div className=" flex ">
          <div className="flex ">
            <div className="ml-auto mx-10 text-sm ">
              <button
                onClick={redirectToTwitch}
                className="text-sm text-footerText"
              >
                nuilzero.tv &copy;
              </button>
              <div className="text-sm ">twitch.tv/nuilzero</div>
            </div>
          </div>

          <div className="ml-auto flex-end text-sm ">
            <div className="m-1.5">
              <button onClick={redirectToGithub} className="text-footerText">
                nuilzero.tv
              </button>{" "}
              is open-source
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
