import React, { ReactNode } from "react";

export default function Container({ children,className }: { children: ReactNode,className?:string }) {
  return <div className={`mx-auto max-w-[1240px] px-5 w-full ${className}`}>{children}</div>;
}
