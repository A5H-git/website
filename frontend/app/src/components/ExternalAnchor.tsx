
import React from "react";

type ExternalAnchorProps = React.PropsWithChildren<{
  link: string;
  ariaLabel: string;
}>;

// Anchor wrapper
export function ExternalAnchor({ link, ariaLabel, children }: ExternalAnchorProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}