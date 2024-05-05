function checkAllVideosLoaded(
  videos: HTMLVideoElement[],
  callback: (isLoaded: boolean) => void
): void {
  let loadedVideosCount = 0;

  videos.forEach((video) => {
    video.addEventListener("loadedmetadata", () => {
      loadedVideosCount++;

      if (loadedVideosCount === videos.length) {
        callback(true);
      }
    });
  });

  if (videos.length === 0) {
    callback(true);
  }
}

export default checkAllVideosLoaded;
