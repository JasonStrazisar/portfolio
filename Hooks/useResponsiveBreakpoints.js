import { useTheme } from "styled-components";

function useResponsiveBreakpoints() {
  const { breakpoints: themeBreakpoints } = useTheme();
  const [breakpoints, setBreakpoints] = useState("");

  function handleScreenSizeChange() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= themeBreakpoints.desktopLg) {
      setBreakpoints("desktopLg");
      return;
    }

    if (screenWidth >= themeBreakpoints.desktop) {
      setBreakpoints("desktop");
      return;
    }

    if (screenWidth >= themeBreakpoints.tablet) {
      setBreakpoints("tablet");
      return;
    }

    if (screenWidth >= themeBreakpoints.mobile) {
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
