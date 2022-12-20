import { useRef, useEffect } from "react";
import { ColorRing } from "react-loader-spinner";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./components.css";

export default function LoadingOverlay() {
  var style = {
    loadingOverlay: {
      width: "100%",
      height: "100%",
      position: "absolute",
      zIndex: "88",
    },
    blocksWrapper: {
      width: "8%",
      height: "100%",
      position: "absolute",
      zIndex: "8",
      margin: "0 46%",
    },
  };

  const loadingOverlay = useRef(null);

  useEffect(() => {
    function removeOverlay() {
      loadingOverlay.current.style.display = "none";
    }

    setTimeout(function () {
      removeOverlay();
    }, 3000);
  }, []);

  return (
    <div className="loading-overlay" ref={loadingOverlay} style={style.loadingOverlay}>
      <ColorRing visible={true} ariaLabel="blocks-loading" wrapperStyle={style.blocksWrapper} colors={["rgb(255,255,255)", "rgb(245,245,245)", "rgb(235,235,235)", "rgb(245,245,245)", "rgb(255,255,255)"]} />
      <Skeleton duration={1} height={`100%`} />
    </div>
  );
}
