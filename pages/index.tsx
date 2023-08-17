export default function Home() {
  return (
    <div className="video-container">
      <video width="100%" height="100%" autoPlay controls>
        <source src="/still-alive.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
