import React from "react";
import type { ComponentProps } from "react";
import { ExternalAnchor } from "./ExternalAnchor";
import { Button } from "./ui/button";

type ButtonIconProps = {
  link: string;
  ariaLabel: string;
  children: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  variant?: ComponentProps<typeof Button>["variant"];
}

export function ButtonIcon({ link, ariaLabel, children, variant}: ButtonIconProps) {
  return (
    <ExternalAnchor link={link} ariaLabel={ariaLabel}>
      <Button variant={variant ? variant : "default"} size="icon">
        {children}
      </Button>
    </ExternalAnchor>
  );
}
