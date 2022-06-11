import { useState, useEffect } from "react";
import { useTheme } from "styled-components";

function useResponsiveBreakpoints() {
  const { spacing } = useTheme();
  const [breakpoints, setBreakpoints] = useState("");

  function handleScreenSizeChange() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= spacing.breakpoints.desktopLg) {
      setBreakpoints("desktopLg");
      return;
    }

    if (screenWidth >= spacing.breakpoints.desktop) {
      setBreakpoints("desktop");
      return;
    }

    if (screenWidth >= spacing.breakpoints.tablet) {
      setBreakpoints("tablet");
      return;
    }

    if (screenWidth >= spacing.breakpoints.mobile) {
      setBreakpoints("mobile");
      return;
    }
  }

  useEffect(function checkIfScreenSizeChange() {
    window.addEventListener("resize", handleScreenSizeChange);
    handleScreenSizeChange();
    return () => window.removeEventListener("resize", handleScreenSizeChange);
  }, []);

  return breakpoints;
}

export default useResponsiveBreakpoints;
