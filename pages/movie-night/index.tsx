import React, { useRef } from "react";
import MainNav from "../components/MainNav";
import Script from "next/script";

interface StreamSettings {
  audio: boolean;
  video: boolean | {};
}

export default function MovieNight() {
  const displaySurfaceRef = useRef<HTMLSelectElement>(null);
  const startButtonRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleSuccess(stream: any) {
    if (
      !startButtonRef.current ||
      !displaySurfaceRef.current ||
      !videoRef.current
    )
      return;

    startButtonRef.current.disabled = true;
    displaySurfaceRef.current.disabled = true;
    videoRef.current.srcObject = stream;

    stream.getVideoTracks()[0].addEventListener("ended", () => {
      alert("The user has ended sharing the screen");
      if (startButtonRef.current) startButtonRef.current.disabled = false;
      if (displaySurfaceRef.current) displaySurfaceRef.current.disabled = false;
    });
  }

  function handleError(error: any) {
    console.error(`getDisplayMedia error: ${error.name}`, error);
  }

  function startStreaming() {
    if (!displaySurfaceRef.current) return;

    const options: StreamSettings = { audio: true, video: true };
    const displaySurface =
      displaySurfaceRef.current.options[displaySurfaceRef.current.selectedIndex]
        .value;
    if (displaySurface !== "default") {
      options.video = { displaySurface };
    }

    navigator.mediaDevices
      .getDisplayMedia(options)
      .then(handleSuccess, handleError);
  }

  return (
    <div className="justify-between h-screen">
      <div className="fixed w-full h-16 pt-5 ml-16 group">
        <div className="hidden w-3/4 group-hover:block">
          <MainNav />
        </div>
      </div>

      <div className="pt-16">
        <button ref={startButtonRef} onClick={startStreaming}>
          Start Streaming
        </button>
        <fieldset id="options" className="invisible">
          <legend>Advanced options</legend>
          <select ref={displaySurfaceRef} id="displaySurface">
            <option value="default" selected>
              Show default sharing options
            </option>
            <option value="browser">Prefer to share a browser tab</option>
            <option value="window">Prefer to share a window</option>
            <option value="monitor">Prefer to share an entire screen</option>
          </select>
        </fieldset>
      </div>

      <div className="absolute top-0 w-screen h-screen -z-50">
        <video ref={videoRef} id="stream" autoPlay playsInline muted></video>
      </div>

      <Script src="https://webrtc.github.io/adapter/adapter-latest.js"></Script>
    </div>
  );
}
