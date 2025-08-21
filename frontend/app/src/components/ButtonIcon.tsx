import React from "react";

import { ExternalAnchor } from "./ExternalAnchor";
import { Button } from "./ui/button";

type ButtonIconProps = {
  link: string;
  ariaLabel: string;
  children: React.ReactElement<React.SVGProps<SVGSVGElement>>;
}

export function ButtonIcon({ link, ariaLabel, children }: ButtonIconProps) {
  return (
    <ExternalAnchor link={link} ariaLabel={ariaLabel}>
      <Button variant="ghost" size="icon">
        {children}
      </Button>
    </ExternalAnchor>
  );
}
