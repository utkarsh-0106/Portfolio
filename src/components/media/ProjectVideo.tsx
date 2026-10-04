interface ProjectVideoProps {
  src: string;
  title: string;
}

export function ProjectVideo({ src, title }: ProjectVideoProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-soft bg-black shadow-sm">
      <video
        className="aspect-video w-full object-cover"
        src={src}
        title={title}
        controls
        playsInline
        preload="metadata"
      />
    </div>
  );
}
