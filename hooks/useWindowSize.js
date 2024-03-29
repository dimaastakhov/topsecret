import { useState, useEffect } from "react";
import throttle from "lodash.throttle";

export const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    const throttled = throttle(handleResize, 150);

    // Add event listener
    window.addEventListener("resize", throttled);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", throttled);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
};
