import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const sendPageView = () => {
      if (window.gtag) {
        window.gtag("config", "G-JNYY91KKBK", {
          page_path: location.pathname,
        });
      }
    };
    sendPageView();
  }, [location]); // Runs whenever the route changes
};

export default usePageTracking;
