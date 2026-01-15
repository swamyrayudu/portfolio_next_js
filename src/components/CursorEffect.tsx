"use client";

import dynamic from "next/dynamic";

// Dynamically import the cursor beam to avoid SSR issues
const CursorBeam = dynamic(() => import("@/components/ui/cursor-beam"), {
  ssr: false,
});

export const CursorEffect = () => {
  return <CursorBeam />;
};

export default CursorEffect;
