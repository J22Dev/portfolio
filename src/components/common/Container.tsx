import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto max-w-7xl xl:max-w-7xl px-4">{children}</div>;
};

export default Container;
