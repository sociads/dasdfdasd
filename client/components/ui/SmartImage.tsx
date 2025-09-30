import React from "react";

export default function SmartImage({
  src,
  alt,
  className,
  width = 1200,
  height = 800,
  fallbackId,
}: {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  fallbackId?: string;
}) {
  const [current, setCurrent] = React.useState(src);

  const onError = () => {
    if (fallbackId) {
      setCurrent(
        `https://images.unsplash.com/${fallbackId}?auto=format&fit=crop&w=${width}&h=${height}&q=80&ixlib=rb-4.0.3`,
      );
    } else {
      setCurrent("/placeholder.svg");
    }
  };

  React.useEffect(() => setCurrent(src), [src]);

  return (
    <img
      src={current}
      alt={alt || ""}
      className={className}
      onError={onError}
    />
  );
}
