import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useAOS = (duration = 1000) => {
  useEffect(() => {
    AOS.init({
      duration,
      once: true, // Animation runs once
    });
  }, [duration]);
};

export default useAOS;
