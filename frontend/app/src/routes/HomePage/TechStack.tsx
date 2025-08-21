import React from "react";

import { Button } from "@/components/ui/button";
// function processTechStack(stack) {
//     category = stack.keys()

// }

function TechStack({ stack }) {
  return (
    <section className="techstack py-3">
      <div className="flex pl-3 gap-x-3">
        <Button>Text 1</Button>
        <Button>Text 2</Button>
        <Button>Text 3</Button>
      </div>
      <div className="flex justify-center">Some Text</div>
    </section>
  );
}

export default TechStack;
