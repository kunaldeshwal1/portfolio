"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export function CodeBlockDemo() {
  const code = `const kunal={
  education
  }
`;

  return (
    <div className="max-w-3xl mx-auto w-full">
      <CodeBlock
        language="jsx"
        filename="aboutMe.js"
        highlightLines={[9, 13, 14, 18]}
        code={code}
      />
    </div>
  );
}
