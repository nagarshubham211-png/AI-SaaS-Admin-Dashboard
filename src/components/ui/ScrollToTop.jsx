import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // instant chahiye to "auto" ya sirf window.scrollTo(0,0)
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;