import React from "react";

const useWindowSize = () => {
  const [dims, setDims] = React.useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  React.useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      setDims({ width: innerWidth, height: innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return dims;
};

export default useWindowSize;
