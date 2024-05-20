import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="h-full bg-zinc-900 text-white">{children}</main>;
};

export default MainLayout;
