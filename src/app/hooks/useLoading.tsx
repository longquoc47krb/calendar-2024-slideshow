import React, { useEffect, useState } from "react";
import imagesLoaded from "imagesloaded";

function useLoading() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showPage, setShowPage] = useState(false);
  function initLoading() {
    let images = document.querySelectorAll(".figure-img");
    const totalImages = images.length;
    let loadedImages = 0;

    imagesLoaded("#images-container", { background: true }, function () {
      console.log("images loaded");
    })
      .on("always", () => {
        console.log("always");
      })
      .on("progress", (instance: any) => {
        loadedImages++;
        let percent = Math.floor((loadedImages / totalImages) * 100);
        console.log(percent);
      })
      .on("done", () => {
        console.log("done");
        setIsLoaded(true);
        setProgress(100);
        setTimeout(() => {
          setShowPage(true);
        }, 1000);
      });
  }
  useEffect(() => {
    initLoading();
  }, []);
  return { isLoaded, progress, showPage };
}

export default useLoading;
