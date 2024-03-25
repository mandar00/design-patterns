import { useEffect, useState } from "react";
import { emitter } from "../App";

const DelayedLoader = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    let timeout;
    // any component can call this function by using emitter.emit("removeLoader")
    const removeGlobalLoader = () => {
      setShowLoader(false);
    };

    // any component can call this function by using emitter.emit("showLoader",1000)
    //  this will enable the loader with the delay of 1 sec
    const showGlobalLoader = (delay) => {
      if (delay === 0) {
        setShowLoader(true);
      } else {
        timeout = setTimeout(() => setShowLoader(true), delay);
      }
    };
    emitter.on("removeLoader", removeGlobalLoader);
    emitter.on("showLoader", showGlobalLoader);

    return () => {
      emitter.off("removeLoader", removeGlobalLoader);
      emitter.off("showLoader", showGlobalLoader);
      clearTimeout(timeout);
    };
  }, []);

  //   add loading animation here
  return showLoader ? "Loading..." : "";
};

export default DelayedLoader;
