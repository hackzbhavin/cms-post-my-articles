import React from "react";

interface VideoEmbedBlockProps {
  url: string;
}

export default function VideoEmbedBlock({ url }: VideoEmbedBlockProps) {
  const isYouTube = url.includes("youtube.com") || url.includes("youtu.be");
  const isVimeo = url.includes("vimeo.com");

  if (!isYouTube && !isVimeo) {
    return <p>Invalid video URL</p>;
  }

  return (
    <div className="video-embed">
      <iframe
        width="100%"
        height="400"
        src={isYouTube ? url.replace("watch?v=", "embed/") : url}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
}
